const WebSocket = require('ws');

// Replitなどの環境ではprocess.env.PORTが使われ、ローカルでは3000になります
const PORT = process.env.PORT || 3000;
const MAX_PEERS_PER_ROOM = 2; // 1部屋2人まで
const PING_INTERVAL_MS = 30000;

// 部屋ごとのクライアントリストを管理
// Map<RoomID, Set<WebSocket>>
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
    ws.roomId = null; // 現在いる部屋ID
    console.log(`Client connected: ${ws.id}`);

    ws.on('message', (raw) => {
        let msg;
        try { msg = JSON.parse(raw); } catch (e) { return; }

        // --- 参加リクエスト (join) ---
        if (msg.type === 'join') {
            if (ws.roomId) return; // 既に参加済みなら無視

            let targetRoomId = null;

            // 1. 自動マッチング: 1人だけで待機している部屋を探す
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

            console.log(`Client ${ws.id} joined ${targetRoomId}. (Total: ${set.size})`);

            // 本人に「入室完了」を通知
            ws.send(JSON.stringify({ type: 'joined', room: targetRoomId }));

            // 部屋に2人揃ったら、先にいた人（相手）に「誰か来たよ」と通知
            if (set.size === 2) {
                for (const client of set) {
                    if (client !== ws && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'user-joined' }));
                    }
                }
            }
            return;
        }

        // --- シグナリングメッセージの転送 ---
        // 同じ部屋にいる相手にだけメッセージを送る
        if (ws.roomId && rooms.has(ws.roomId)) {
            const room = rooms.get(ws.roomId);
            for (const client of room) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(raw); // offer, answer, candidate などをそのまま転送
                }
            }
        }
    });

    // --- 切断時の処理 ---
    ws.on('close', () => {
        if (ws.roomId && rooms.has(ws.roomId)) {
            const room = rooms.get(ws.roomId);
            room.delete(ws);
            
            if (room.size === 0) {
                // 誰もいなくなったら部屋を削除
                rooms.delete(ws.roomId);
                console.log(`Room ${ws.roomId} deleted.`);
            } else {
                // まだ相手がいる場合、「相手が退出した」と通知
                for (const client of room) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'user-left' }));
                    }
                }
            }
        }
    });
});