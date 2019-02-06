var express = require('express');
var router = express.Router();
var passport = require('passport');
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sessions/new', { error: req.flash('error') });
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/sessions',
        failureFlash: true
    })
);

router.post('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;

