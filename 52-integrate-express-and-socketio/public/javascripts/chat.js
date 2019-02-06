(function () {
    const socket = io();

    socket.on('createRoom', app.createRoom);
    socket.on('message', app.newMessage);

    const server = {
        changeRoom(oldRoom, newRoom) {
            socket.emit('changeRoom', { oldRoom, newRoom });
        },

        sendMessage(text) {
            socket.emit('message', text);
        },

        createRoom(roomName) {
            socket.emit('createRoom', roomName);
        },

        login(name) {
            socket.emit('login', { username: name });
        }
    };

    app.setServer(server);
}());