const {twice} = require('./src/utils');
// npm add express
// npm install --save express
// npm install express
// npm add --save express
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`6 * 2 = ${twice(6)}`);
})

app.listen(3000)