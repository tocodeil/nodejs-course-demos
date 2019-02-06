var express = require('express');
var router = express.Router();
const contacts = require('../lib/contacts');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('contacts/index', { contacts: contacts.listContacts() });
});

router.get('/new', function(req, res) {
    res.render('contacts/new', { item: { name: '', email: '' }});
});

router.post('/', function(req, res) {
    contacts.addContact(req.body.name, req.body.email);
    res.render('contacts/index', { contacts: contacts.listContacts() });
});

router.get('/:id', function(req, res) {
    const id = req.param('id');
    res.render('contacts/edit', { item: contacts.findContactById(id)});
});

router.post('/:id', function(req, res) {
    const id = req.param('id');
    const item = contacts.findContactById(id);
    contacts.udpateContact(id, req.body);
    res.render('contacts/edit', { item: item });
});

module.exports = router;

