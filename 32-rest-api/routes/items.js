const router = require('express').Router();
const items = require('../lib/items');

// collections
// return index of all items
router.get('/', function(req, res, next) {
    res.send(items.index());
});

// create a new item
router.post('/', function(req, res, next) {
   const name = req.body.name;
   const description = req.body.description;
   const id = items.create(name, description);
   res.send({ id });
});

// info on item :id
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    res.send(items.find(id));
});

// removes an item
router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    items.delete(id);
    res.sendStatus(200);
});

// update an item
router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    const { name, description } = req.body;

    items.update(id, name, description);
    res.sendStatus(200);
});

module.exports = router;