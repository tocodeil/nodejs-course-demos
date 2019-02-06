var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', async function(req, res, next) {

  let currentUser = null;
  if (req.session.userid) {
    currentUser = await User.findById(req.session.userid);
  }

  res.render('index', { title: 'Express', user: currentUser });
});

module.exports = router;
