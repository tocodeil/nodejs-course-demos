const ejs = require('ejs');

const template = `
  <html>
    <body>
      <ul>
        <% for (let item of items) { %>
          <li><%= item %></li>
        <% } %>
      </ul>
    </body>
  </html>
`;

const days = ['Sunday', 'Monday', 'Tuesday'];
console.log(ejs.render(template, { items: days }));
