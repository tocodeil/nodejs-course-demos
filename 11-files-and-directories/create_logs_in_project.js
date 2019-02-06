const fs = require('fs');
const path = require('path');

console.log(__filename);

['./logs', './doc/html'].forEach(dirName => {
    fs.mkdir(path.join(__dirname, dirName), { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`${dirName} folder is ready`);
    });
});

