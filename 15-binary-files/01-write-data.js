const fs = require('fs');

const buf = Buffer.alloc(10);
for (let i=0; i < 10; i++) {
    buf.writeUInt8(i * i, i);
}

fs.open('out.bin', 'w', (err, fd) => {
    fs.write(fd, buf, (err) => {
        if (err) throw err;
        console.log('the end');
    });
});
