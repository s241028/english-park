// server.js
// 改良版シグナリングサーバー (ws)
// 使い方:
//   npm init -y
//   npm install ws
//   node server.js
//
// クライアントは接続後、まず { type: 'join', room: 'room-id' } を送信してください。
// その後 offer/answer/candidate をルーム内の相手にブロードキャストします。

const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;
const MAX_PEERS_PER_ROOM = 2;       // 1ルーム当たりの最大参加者数
const JOIN_TIMEOUT_MS = 8000;       // 接続後に join を送らない場合に切断する
const PING_INTERVAL_MS = 30000;     // heartbeat ping 間隔

// roomId -> Set of ws
const rooms = new Map();
// 簡易ID生成器（外部依存を避ける）
let clientCounter = 0;
function genClientId() {
    clientCounter += 1;
    return `c-${Date.now()}-${clientCounter}`;
}

const wss = new WebSocket.Server({ port: PORT }, () => {
    console.log(`シグナリングサーバーがポート${PORT}で起動しました...`);
});

// Heartbeat (ping/pong) - 接続切断の検出
function noop() {}
function heartbeat() { this.isAlive = true; }
const pingInterval = setInterval(() => {
    wss.clients.forEach(ws => {
        if (ws.isAlive === false) {
            try { ws.terminate(); } catch (e) {}
            return;
        }
        ws.isAlive = false;
        try { ws.ping(noop); } catch (e) {}
    });
}, PING_INTERVAL_MS);

wss.on('connection', (ws, req) => {
    ws.isAlive = true;
    ws.on('pong', heartbeat);

    ws.id = genClientId();
    ws.roomId = null;
    console.log(`Client connected: ${ws.id}`);

    // join を待つタイムアウト
    const joinTimer = setTimeout(() => {
        if (!ws.roomId) {
            try {
                ws.send(JSON.stringify({ type: 'error', message: 'join-timeout' }));
            } catch (e) {}
            ws.terminate();
        }
    }, JOIN_TIMEOUT_MS);

    ws.on('message', (raw) => {
        // 受信メッセージは必ずJSONを期待する（バイナリは扱わない）
        let msg;
        try {
            msg = JSON.parse(raw.toString());
        } catch (err) {
            ws.send(JSON.stringify({ type: 'error', message: 'invalid-json' }));
            return;
        }

        // --- join --- //
        if (msg.type === 'join') {
            if (!msg.room) {
                ws.send(JSON.stringify({ type: 'error', message: 'missing-room' }));
                return;
            }
            const roomId = String(msg.room);
            // 既に参加済みなら無視
            if (ws.roomId) {
                ws.send(JSON.stringify({ type: 'error', message: 'already-joined' }));
                return;
            }

            const set = rooms.get(roomId) || new Set();
            if (set.size >= MAX_PEERS_PER_ROOM) {
                ws.send(JSON.stringify({ type: 'room-full', room: roomId }));
                ws.terminate();
                return;
            }

            // 正常に参加
            set.add(ws);
            rooms.set(roomId, set);
            ws.roomId = roomId;
            clearTimeout(joinTimer);

            ws.send(JSON.stringify({ type: 'joined', id: ws.id, room: roomId }));

            // ルーム内の他クライアントに通知（user-joined）
            for (const client of set) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'user-joined', id: ws.id }));
                }
            }

            console.log(`Client ${ws.id} joined room ${roomId} (size=${set.size})`);
            return;
        }

        if (!ws.roomId) {
            ws.send(JSON.stringify({ type: 'error', message: 'not-joined' }));
            return;
        }

        const allowedTypes = new Set(['offer', 'answer', 'candidate', 'renegotiate', 'data']);
        if (!msg.type || !allowedTypes.has(msg.type)) {
            ws.send(JSON.stringify({ type: 'error', message: 'unsupported-message-type', receivedType: msg.type || null }));
            return;
        }

        // ブロードキャスト（自分以外の同ルーム参加者へ）
        const roomSet = rooms.get(ws.roomId);
        if (!roomSet) return;

        const forward = {
            ...msg,
            from: ws.id,
            timestamp: Date.now()
        };

        for (const client of roomSet) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                try {
                    client.send(JSON.stringify(forward));
                } catch (e) {
                    console.error('send error:', e);
                }
            }
        }
    });

    ws.on('close', () => {
        cleanupClient(ws);
    });

    ws.on('error', (err) => {
        console.error('ws error', ws.id, err && err.message);
        cleanupClient(ws);
    });
});

// クライアント切断時の後処理
function cleanupClient(ws) {
    try {
        if (ws.roomId) {
            const set = rooms.get(ws.roomId);
            if (set) {
                set.delete(ws);
                // ルーム内の他メンバーに通知
                for (const client of set) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'user-left', id: ws.id }));
                    }
                }
                if (set.size === 0) rooms.delete(ws.roomId);
                else rooms.set(ws.roomId, set);
                console.log(`Client ${ws.id} left room ${ws.roomId} (remaining=${set.size})`);
            }
            ws.roomId = null;
        }
    } catch (e) {
        console.error('cleanup error', e);
    }
}

process.on('SIGINT', () => {
    console.log('Shutting down...');
    clearInterval(pingInterval);
    wss.close(() => process.exit(0));
});