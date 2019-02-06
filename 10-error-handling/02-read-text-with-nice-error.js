const fs = require('fs');

const filename = '/etc/shellssss';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error - could not open the file ${filename} for reading. Please verify the file exists and you have permissions to read it.`);
    process.exit(1);
  }
  console.log(data);
});

