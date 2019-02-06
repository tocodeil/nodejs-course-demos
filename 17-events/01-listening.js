const { spawn } = require('child_process');
const proc = spawn('ping');

function handleLastExit(code, signal) {
    console.log(`4. ping finished. code = ${code}`);
    console.log('can use explicit functions');
    console.log('---');
}

proc.on('exit', function(code, signal) {
    console.log(`1. ping finished. code = ${code}`);
    console.log(`proc object = ${this}`);
    console.log('---');
});

proc.on('exit', (code, signal) => {
    console.log(`2. ping finished. code = ${code}`);
    console.log(`no proc object since we used arrow functions`);
    console.log('---');
});

proc.on('exit', function(code) {
    console.log(`3. ping finished. code = ${code}`);
    console.log('ok to ignore some arguments to the handler');
    console.log('---');
});

proc.on('exit', handleLastExit);