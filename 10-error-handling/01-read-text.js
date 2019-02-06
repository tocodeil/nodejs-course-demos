const fs = require('fs');

const filename = '/etc/shellssss';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
});

