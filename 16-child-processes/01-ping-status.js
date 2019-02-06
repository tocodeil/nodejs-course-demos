const { spawn } = require('child_process');

const ping = spawn(
    'C:/Windows/System32/ping.exe',
    ['www.ynet.co.il'],
    { stdio: 'ignore' }
)

ping.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});

ping.on('error', (err) => {
    console.log(err);
});