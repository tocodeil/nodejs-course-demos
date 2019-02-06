const express = require('express');
const Room = require('../models/room');
const chat = require('../chat');
const router = express.Router();

router.get('/chat', async function(req, res) {
    const rooms = await Room.find({ name: { '$ne': 'lobby' }}).select('name');
    const lobby = await Room.findOne({ name: 'lobby' });
    res.render('chat', { rooms: rooms, activeRoom: lobby });
});

router.post('/ping', async function(req, res) {
    chat.io.sockets.emit('message', { from: 'Server', text: 'Ping!' });
    res.send(200);
});

module.exports = router;