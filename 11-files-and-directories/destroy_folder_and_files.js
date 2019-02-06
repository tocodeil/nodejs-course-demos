const fsExtra = require('fs-extra');

fsExtra.remove('tmp', (err) => {
    console.log('tmp folder is dead');
});