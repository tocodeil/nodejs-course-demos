const fs = require('fs');
console.log(__filename);


['./logs', './doc/html'].forEach(path => {
    fs.mkdir('./logs', { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`${path} folder is ready`);
    });
});
