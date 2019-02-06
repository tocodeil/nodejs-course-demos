const fs = require('fs');

// Demo 1 - read file async
// fs.readFile('/etc/shells', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Demo 2 - read file sync
// const data = fs.readFileSync('/etc/shells', 'utf8');
// console.log(data);


// Demo 3 - read file async using a promise
const fsp = fs.promises;
async function demo3() {
  const data = await fsp.readFile('/etc/shells', 'utf8');
  console.log(data);
}

demo3();
