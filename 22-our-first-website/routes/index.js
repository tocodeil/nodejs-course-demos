var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'home', title: 'Welcome Home' });
});

router.get('/about', function(req, res, text) {
  res.render('index', { page: 'about', title: 'About Us'});
});

module.exports = router;
