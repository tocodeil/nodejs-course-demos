const { spawn } = require('child_process');

const proc = spawn('ipconfig.exe');

let ip = null;

proc.stdout.on('data', (data) => {
    const out = data.toString();
    const match = out.match(/IPv4 Address[. ]+: ([\d.]+)/);
    if (match) {
        ip = match[1];
        // console.log(out);
    }
});

proc.on('exit', (code) => {
    console.log(`Found ip = ${ip}`);
});
