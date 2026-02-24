// server.js (Replitの index.js に貼り付けてください)
// 自動マッチング機能付きシグナリングサーバー

const WebSocket = require('ws');

// Replitではポート3000を使用
const PORT = process.env.PORT || 3000;
const MAX_PEERS_PER_ROOM = 2;       // 1ルーム2人まで
const JOIN_TIMEOUT_MS = 15000;      // タイムアウト延長
const PING_INTERVAL_MS = 30000;

const rooms = new Map();

function genClientId() {
    return `c-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

const wss = new WebSocket.Server({ port: PORT }, () => {
    console.log(`Matching Server started on port ${PORT}`);
});

function noop() {}
function heartbeat() { this.isAlive = true; }

const pingInterval = setInterval(() => {
    wss.clients.forEach(ws => {
        if (ws.isAlive === false) return ws.terminate();
        ws.isAlive = false;
        ws.ping(noop);
    });
}, PING_INTERVAL_MS);

wss.on('connection', (ws) => {
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    ws.id = genClientId();
    ws.roomId = null;
    console.log(`Client connected: ${ws.id}`);

    ws.on('message', (raw) => {
        let msg;
        try { msg = JSON.parse(raw); } catch (e) { return; }

        // --- 参加リクエスト (join) ---
        if (msg.type === 'join') {
            // 既に部屋にいる場合は無視
            if (ws.roomId) return;

            let targetRoomId = null;

            // 1. 1人だけで待機している部屋を探す (自動マッチング)
            for (const [id, clients] of rooms.entries()) {
                if (clients.size === 1) {
                    targetRoomId = id;
                    break;
                }
            }

            // 2. 空きがなければ新しい部屋を作る
            if (!targetRoomId) {
                targetRoomId = `room-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            }

            // 部屋に参加させる
            const set = rooms.get(targetRoomId) || new Set();
            set.add(ws);
            rooms.set(targetRoomId, set);
            ws.roomId = targetRoomId;

            console.log(`Client ${ws.id} matched in ${targetRoomId} (Total: ${set.size})`);

            // 自分に参加完了を通知
            ws.send(JSON.stringify({ type: 'joined', room: targetRoomId }));

            // 相手がいれば「相手が来たよ」と通知
            for (const client of set) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ type: 'user-joined' }));
                }
            }
            return;
        }

        // --- その他のメッセージ中継 ---
        if (!ws.roomId) return;
        const room = rooms.get(ws.roomId);
        if (room) {
            for (const client of room) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(raw); // そのまま転送
                }
            }
        }
    });

    ws.on('close', () => {
        if (ws.roomId) {
            const room = rooms.get(ws.roomId);
            if (room) {
                room.delete(ws);
                // 相手に切断を通知
                for (const client of room) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'user-left' }));
                    }
                }
                if (room.size === 0) rooms.delete(ws.roomId);
            }
        }
    });
});