function readJumpsFile(fileName) {
    
}

function countJumps(gameBuffer) {
    let pos = 0;
    let counter = 0;
    while (pos < gameBuffer.length) {
        const jumpSize = gameBuffer.readInt8(pos);
        gameBuffer.writeInt8(jumpSize + 1, pos);
        pos += jumpSize;
        counter += 1;
    }

    return counter;
}

// prints 5
console.log(countJumps(Buffer.from([0, 3, 0, 1, -3])));
