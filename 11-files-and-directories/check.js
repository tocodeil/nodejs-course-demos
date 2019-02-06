const fs = require('fs');

// process.argv[0] is node process
// process.argv[1] is the name of THIS script
// process.argv[2..] are the command line arguments
const path = process.argv[2];

console.log('Checking stat for: ', path);

fs.stat(path, (err, stat) => {
    if (err) {
        console.log(`Nothing found at: ${path}`);
        return;
    }

    if (stat.isFile()) {
        console.log(`${path} is a file`);
        return;
    }

    if (stat.isDirectory()) {
        console.log(`${path} is a directory`);
    }
});