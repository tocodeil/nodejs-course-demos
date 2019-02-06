const express = require('express');
const passport = require('passport');
const router = express.Router();
const createError = require('http-errors');

router.get('/whoami', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    if (req.user) {
        res.send({ email: req.user.email });
    } else {
        next(createError(400));        
    }
});

module.exports = router;