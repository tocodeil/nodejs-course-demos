var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sessions/new');
});

router.post('/', async function(req, res, next) {
    const user = await User.findOne({ email: req.body.email });
    const valid = await user.checkPassword(req.body.password);
    if (valid) {
        req.session.userid = user.id;
    } else {
        return res.render('sessions/new', { error: 'Email/Password not found'});
    }
    res.redirect('/');
});

router.delete('/', function(req, res, next) {
    req.session.userid = null;
    res.redirect('/');
});

module.exports = router;

