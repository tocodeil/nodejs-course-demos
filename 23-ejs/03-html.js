const ejs = require('ejs');

const template = `
    <body>
      <div><%= htmlContent %></div>
      <div><%- htmlContent %></div>
    </body>
`;

console.log(ejs.render(template, { htmlContent: '<b>hello</b>'}));

