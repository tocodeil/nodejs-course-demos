(function () {
    let server = {
        changeRoom(oldRoom, newRoom) { },
        sendMessage(text) { },
        createRoom(roomName) { },
        login(name) { },
    }

    const $panel = $('.panel');
    const $myMessageBox = $('.my-message-box');
    const $sendMessageButton = $('.send-message-button');

    const $roomList = $('.room-list');
    const $newRoomButton = $('.btn-new-room');
    const $newRoomName = $('.new-room-name');

    let currentRoom = 'lobby';

    window.app = {
        createRoom(roomName) {
            $roomList.append(`<li class="room">${roomName}</li>`)
        },

        newMessage(msg) {
            $panel.append(`<li><b>${msg.from}:</b> ${msg.text}`);
        },

        setServer(_server) {
            server = _server;
        }
    }

    $roomList.on('click', '.room', function (ev) {
        const newRoomName = ev.target.textContent;
        if (currentRoom === newRoomName) return;

        server.changeRoom(currentRoom, newRoomName);

        $('.room.active').removeClass('active');
        $(ev.target).addClass('active');
        $panel.html('');
    });

    $newRoomButton.on('click', function (ev) {
        const roomName = $newRoomName.val();
        server.createRoom(roomName);
    });

    $sendMessageButton.on('click', function (ev) {
        const messageText = $myMessageBox.val();
        $myMessageBox.val('');
        
        const loginMessage = messageText.match(/^\/login (\w+)/);
        if (loginMessage) {
            const name = loginMessage[1];
            server.login(name);
        } else {
            server.sendMessage(messageText);
        }
    });

}());