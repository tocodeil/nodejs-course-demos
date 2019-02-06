var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('444');
  res.render('index', { title: 'Express', user: req.user });
});

router.get('/token', function(req, res, next) {
  res.render('token', { token: null });
});

router.post('/token', function(req, res, next) {
  if (req.user) {
    const token = jwt.sign(
      { id: req.user.id },
      'secret123',
      { expiresIn: '7d' }
    );
    res.render('token', { token });
  }
});

module.exports = router;
