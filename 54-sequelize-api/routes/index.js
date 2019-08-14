var express = require('express');
var router = express.Router();
const Dig = require('../lib/dig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/dig', async function(req, res, next) {
  const dig = new Dig();
  const { url, username } = req.body;
  await dig.dig(url, username);
  res.sendStatus(201);
});

router.get('/dig', async function(req, res, next) {
  const dig = new Dig();
  const data = dig.list();
  res.send(data);
});

module.exports = router;
