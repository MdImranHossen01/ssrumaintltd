const http = require('http');
const fs = require('fs');
const path = require('path');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync(path.join(__dirname, 'home-response.html'), data, 'utf8');
    console.log('Status code:', res.statusCode);
    console.log('Data length:', data.length);
  });
}).on('error', (err) => {
  console.error('Error fetching home page:', err);
});
