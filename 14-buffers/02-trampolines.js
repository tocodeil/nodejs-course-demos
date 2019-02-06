const readline = require('readline');
const fs = require('fs');

function countLines(filename) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(filename),
            crlfDelay: Infinity,
        });

        let count = 0;
        rl.on('line', (line) => { count++; });
        rl.on('close', () => resolve(count));
    });
}

function initializeBuffer(filename) {
    return new Promise(async (resolve, reject) => {
        const size = await countLines(filename);
        const buf = Buffer.alloc(size);
        const rl = readline.createInterface({
            input: fs.createReadStream(filename),
            crlfDelay: Infinity,
        });

        let lineNumber = 0;
        rl.on('line', (line) => {
            buf.writeInt8(Number(line), lineNumber++);
        });
        rl.on('close', () => resolve(buf));
    });
}

function play(mazeBuffer) {
    let pos = 0, count = 0;
    while (pos < mazeBuffer.length) {
        const jumpValue = mazeBuffer.readInt8(pos);
        mazeBuffer.writeInt8(jumpValue + 1, pos);
        pos += jumpValue;
        count++;
    }
    return count;
}

async function main() {
    const buf = await initializeBuffer('input.txt');
    const steps = play(buf);
    console.log(`Maze took ${steps} jumps to finish`);
}

main();