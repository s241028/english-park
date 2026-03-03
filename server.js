const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;
const MAX_PEERS_PER_ROOM = 2;
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

        if (msg.type === 'join') {
            if (ws.roomId) return;
            let targetRoomId = null;

            for (const [id, clients] of rooms.entries()) {
                if (clients.size === 1) {
                    targetRoomId = id;
                    break;
                }
            }

            if (!targetRoomId) {
                targetRoomId = `room-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            }

            const set = rooms.get(targetRoomId) || new Set();
            set.add(ws);
            rooms.set(targetRoomId, set);
            ws.roomId = targetRoomId;

            console.log(`Client ${ws.id} joined ${targetRoomId}. (Total: ${set.size})`);
            
            // とりあえず本人に入室完了を通知
            ws.send(JSON.stringify({ type: 'joined', room: targetRoomId }));

            // ★修正: 部屋に2人揃ったら、お互いに「接続開始」の合図を出す
            if (set.size === 2) {
                for (const client of set) {
                    if (client.readyState === WebSocket.OPEN) {
                        // 先に待っていた人(client !== ws)にだけ電話をかけさせる(initiator: true)
                        client.send(JSON.stringify({ 
                            type: 'ready', 
                            initiator: client !== ws 
                        }));
                    }
                }
            }
            return;
        }

        if (ws.roomId && rooms.has(ws.roomId)) {
            const room = rooms.get(ws.roomId);
            for (const client of room) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(raw);
                }
            }
        }
    });

    ws.on('close', () => {
        if (ws.roomId && rooms.has(ws.roomId)) {
            const room = rooms.get(ws.roomId);
            room.delete(ws);
            
            if (room.size === 0) {
                rooms.delete(ws.roomId);
            } else {
                for (const client of room) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'user-left' }));
                    }
                }
            }
        }
    });
});

process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err);
});