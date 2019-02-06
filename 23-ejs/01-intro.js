const ejs = require('ejs');

const template = 'Hello <%= name %>';
console.log(ejs.render(template, { name: 'ynon' }));

const math = '<%= x %> + <%= y %> = <%= x + y %>';
console.log(ejs.render(math, { x: 10, y: 14 }));
