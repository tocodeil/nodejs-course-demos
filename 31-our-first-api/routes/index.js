var express = require('express');
var router = express.Router();

// messages -> /messages

const messages = [
  { from: 'ynon', text: 'hello!' },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(messages);
});

router.post('/', function(req, res, next) {
  const from = req.body.from;
  const text = req.body.text;
  const msg = { from, text };
  messages.push(msg);

  res.send(msg);
});

module.exports = router;
