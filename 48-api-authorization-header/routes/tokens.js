var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/new', function(req, res, next) {
    res.render('tokens/new', { token: null });
});

router.post('/', function(req, res, next) {
    if (!req.user) {
        return res.redirect('/sessions/new');
    }

    const token = jwt.sign(
        { id: req.user.id },
        'ninja',
        { expiresIn: '7d' },
    )
    res.render('tokens/new', { token });
});

module.exports = router;