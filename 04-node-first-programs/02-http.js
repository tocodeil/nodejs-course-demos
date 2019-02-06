const { URL } = require('url');
const https = require('https');

const url = new URL('https://swapi.co/api/people/1/');

const req = https.request(url, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
