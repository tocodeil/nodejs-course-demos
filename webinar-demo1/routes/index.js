var express = require('express');
var router = express.Router();
var feed = require('../lib/feed');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { posts: feed.posts() });
});

router.post('/', async function(req, res, next) {
  // req
  const header = req.body.header;
  const content = req.body.content;
  await feed.addPost(header, content);
  res.render('index', { posts: feed.posts() });
});

module.exports = router;
