const socketio = require('socket.io');

function init(server) {
    console.log('init');
    const io = socketio(server);
    io.on('connection', function (socket) {
        console.log('new client connected');
        socket.emit('news', { hello: 'world'});
        socket.on('echo', function(data) {
            socket.emit('echo', data);
        });
    });
}

module.exports = init;