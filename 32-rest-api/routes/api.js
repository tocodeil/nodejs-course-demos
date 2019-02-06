const express = require('express');
const router = express.Router();
const items = require('../lib/items');

router.get('/items', function(req, res, next) {
    res.send(items.index(req.param('s') || ''));
});

router.post('/items', function(req, res, next) {
    const newId = items.create(req.body.name, req.body.description);
    res.send({ id: newId });
});

router.get('/items/:id', function(req, res, next) {
    res.send(items.find(req.params.id));
});

router.put('/items/:id', function(req, res, next) {
    res.send(items.update(req.params.id, req.body.name, req.body.description));
});

router.delete('/items/:id', function(req, res, next) {
    items.delete(req.params.id);
    res.send(204);
});

module.exports = router;