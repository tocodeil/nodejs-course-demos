const socketio = require('socket.io');
const Room = require('./models/room');

function init(server) {
    const io = socketio(server);
    init.io = io;
    io.on('connection', async function (socket) {
        console.log('new chat client connected');
        const lobby = await Room.findOrCreateOne({ name: 'lobby' });
        socket.data = { user: 'Unknown', activeRoom: lobby };
        socket.join('lobby');

        socket.on('login', function({ username }) {
            socket.data.user = username;
            socket.join('lobby');
            io.to('lobby').emit('message', { from: 'Server', text: `User Joined: ${username}`});
            console.log('new user', username);
        })

        socket.on('message', async function(text) {
            console.log('new message: ', text);
            const from = socket.data.user;
            const room = socket.data.activeRoom;
            io.to(room.name).emit('message', { text, from });

            room.messages.push({ text, from });
            await room.save();
        });

        socket.on('createRoom', function(roomName) {
            io.sockets.emit('createRoom', roomName);
        });

        socket.on('changeRoom', async function({ oldRoom, newRoom }) {
            const room = await Room.findOrCreateOne({ name: newRoom });
            socket.leave(oldRoom);
            socket.join(newRoom);
            socket.data.activeRoom = room;
        });
    });
}

module.exports = init;
