const { spawn } = require('child_process');

const ping = spawn('C:/Windows/System32/ping.exe', ['www.ynet.co.il'])

const tookTime = [];

ping.stdout.on('data', (data) => {
    const out = data.toString('utf8');
    // console.log(out);
    const match = out.match(/time=(\d+)/);
    if (match) {
        const took = Number(match[1]);
        tookTime.push(took);
    }
});

ping.on('exit', (code) => {
    const avg = tookTime.reduce((acc, val) => acc + val, 0) / tookTime.length;
    console.log(`child process exited with code ${code}`);
    console.log(`Average request time was: ${avg}`);
});
