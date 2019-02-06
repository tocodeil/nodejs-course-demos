const fs = require('fs');

const dataUtf8 = Buffer.from('hello world', 'utf8');
const dataUtf16 = Buffer.from('hello world', 'ucs-2');

console.log(dataUtf8);
console.log(dataUtf16);
