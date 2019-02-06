var express = require('express');
var router = express.Router();
var createError = require('http-errors');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  setTimeout(
    function() {
      return next(createError('baaa'));
    }, 0);
});

router.get('/file', function(req, res, next) {
  fs.readFile('C:/Windows/win.ini', 'utf8', (err, data) => {
    if (err) return next(err);
    res.send(data);
  })
});

module.exports = router;
