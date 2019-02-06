var express = require('express');
var router = express.Router();
const passport = require('passport');

router.use(passport.authenticate('jwt', { session: false }));

router.get('/whoami', function(req, res, next) {
    res.send(`Hello! ${req.user.email}`);
});

module.exports = router;
