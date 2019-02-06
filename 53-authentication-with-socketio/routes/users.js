var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/new', { user: new User() });
});

router.post('/', async function(req, res, next) {
  const user = new User(req.body);
  try {
    await user.save();
  } catch (err) {
    return res.render('users/new', { user });
  }

  req.login(user, function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
