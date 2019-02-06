const fs = require('fs');

const buf = Buffer.alloc(2);

function readAndPrintDataFromFile(fd) {
    return new Promise((resolve, reject) => {
        fs.read(fd, buf, 0, 2, null, (err, bytesRead) => {
            if (err) throw err;
            if (bytesRead === 0) { 
                return resolve(false)
            };

            console.log(buf.readInt8(0));
            console.log(buf.readInt8(1));
            resolve(true);
        });
    });
}

fs.open('out.bin', 'r', async (err, fd) => {
    if (err) throw err;
    
    let readMore = true;
    while (readMore) {
        readMore = await readAndPrintDataFromFile(fd);
    }
});
