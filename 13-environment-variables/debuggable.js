const debugMode = process.env.DEBUG;
const fs = require('fs');

function debug(msg) {
    if (!debugMode) return;

    console.log(msg);
}

debug('--- Program starts');
debug('--- preparing to create a file named: demo.txt');
fs.open('demo.txt', 'w', (err, fd) => {
    if (err) {
        debug(err);
        process.exit(1);
    };

    debug('--- file opened ok');
    fs.write(fd, "Hello world\n", (err) => {
        if (err) {
            debug(err);
            process.exit(2);
        }

        debug('--- the end');
    });
});