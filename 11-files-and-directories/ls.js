const fs = require('fs');

function printTypeOf(entry) {
    fs.stat(entry, (err, stat) => {
        if (err) {
            console.log(`Nothing found at: ${entry}`);
            return;
        }

        if (stat.isFile()) {
            console.log(`F ${entry}`);
            return;
        }

        if (stat.isDirectory()) {
            console.log(`D ${entry}`);
        }
    });

}

fs.readdir('.', (err, files) => {
    for (entry of files) {
        printTypeOf(entry);
    }
});