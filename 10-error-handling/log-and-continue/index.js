const express = require('express')
const fs = require('fs');
const logger = require('./logger');

const app = express()
const port = 3000

app.get('/ok', (req, res) => {
  fs.readFile('C:/Windows/win.ini', 'utf8', (err, win_ini) => {
      if (err) {
          logger.error(err);
          return res.status(401).send('Error ...');
      }

      res.send(win_ini);
  });
});

app.get('/err', (req, res) => {
    fs.readFile('C:/Windows/winnn.ini', 'utf8', (err, win_ini) => {
      if (err) {
          logger.error(err);
          return res.status(401).send('Error ...');
      }
      
      res.send(win_ini);
    });
  });
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

