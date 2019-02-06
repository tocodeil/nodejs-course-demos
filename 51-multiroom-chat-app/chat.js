const socketio = require('socket.io');

function init(server) {
    const io = socketio(server);
    io.on('connection', function (socket) {
        console.log('new chat client connected');
        socket.data = { user: 'Unknown', activeRoom: 'lobby' };
        socket.join('lobby');

        socket.on('login', function({ username }) {
            socket.data = { activeRoom: 'lobby', user: username };
            socket.join('lobby');
            io.to('lobby').emit('message', { from: 'Server', text: `User Joined: ${username}`});
            console.log('new user', username);
        })

        socket.on('message', function(text) {
            console.log('new message: ', text);
            const from = socket.data.user;
            io.to(socket.data.activeRoom).emit('message', { text, from });
        });

        socket.on('createRoom', function(roomName) {
            io.sockets.emit('createRoom', roomName);
        });

        socket.on('changeRoom', function({ oldRoom, newRoom }) {
            socket.leave(oldRoom);
            socket.join(newRoom);
            socket.data.activeRoom = newRoom;
        });
    });
}

module.exports = init;
