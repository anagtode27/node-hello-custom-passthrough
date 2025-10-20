const https = require('https');
const fs = require('fs');
const port = 8080;

const options = {
  key: fs.readFileSync('/etc/tls/tls.key'),
  cert: fs.readFileSync('/etc/tls/tls.crt')
};

https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.end('Hello Secure Node!\n');
}).listen(port, '0.0.0.0', () => {
  console.log(`Secure server running on https://0.0.0.0:${port}/`);
});
