const fs = require('fs');

const out = fs.createWriteStream('./log.txt', {
  encoding: 'utf8',
  flags: 'a',
});
out.write("Hello world\n");
for (let i=0; i < 10; i++) {
  out.write(`counting... ${i}\n`);
}
out.end();

out.on('finish', function() {
  console.log('2. Finished writing data to file');
});

out.on('error', function(err) {
  console.log('2. Write failed. Error was:');
  // error is an object with keys: ['errno', 'code', 'syscall', 'path']
  console.log(err);
});

console.log('1. Waiting for data to be written... ');

