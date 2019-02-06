var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/params', function(req, res) {
  res.render('params', { queryParams: JSON.stringify(req.query) });
});

router.get('/task/:id', function(req, res) {
  const tasks = [
    { id: 12, text: 'feed the fish' },
    { id: 15, text: 'eat candy' },
    { id: 7, text: 'write some JavaScript' },
  ];

  const task = tasks.filter(t => t.id === Number(req.params.id))[0];
  res.render('task', { task: task });
});

router.get('/days', function(req, res) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const s = req.query.s || '';

  res.render('days', { days: days.filter(name => name.toLowerCase().includes(s))});
});

module.exports = router;
