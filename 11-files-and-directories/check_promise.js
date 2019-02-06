const fs = require('fs');
const fsp = fs.promises;

// process.argv[0] is node process
// process.argv[1] is the name of THIS script
// process.argv[2..] are the command line arguments

async function check(path) {
    try {
        const stat = await fsp.stat(path);

        if (stat.isFile()) {
            console.log(`${path} is a file`);
            return;
        }
    
        if (stat.isDirectory()) {
            console.log(`${path} is a directory`);
        }
    } catch (err) {
        console.log(`Nothing found at: ${path}`);
        return;
    }
}

const path = process.argv[2];
console.log('Checking stat for: ', path);
check(path);
