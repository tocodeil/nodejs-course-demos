const socketio = require('socket.io');

module.exports = function(server) {
    const io = socketio(server);

    // a new client joined :)
    io.on('connection', function(socket) {
        socket.on('echo', function(data) {
            console.log('Got event', data);
            // Send a message to the socket that sent the event 
            // socket.emit('echo', data);

            // Send a message to ALL active clients
            io.sockets.emit('echo', data);

            // Send a message to ALL BUT sending socket
            // socket.broadcast.emit('echo', data);
        });
    });
}