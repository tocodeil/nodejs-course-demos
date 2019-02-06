const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('/etc/shells'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(line);
});
