const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
  try {
    let filePath;

    if (req.url == '/') {
      filePath = './index.html';
    } else if (req.url == '/about') {
      filePath = './about.html';
    } else if (req.url == '/contact-me') {
      filePath = './contact.html';
    } else {
      filePath = './404.html';
    }

    const data = await fs.readFile(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text-html' });
    res.end(data);
  } catch (err) {
    console.log(err);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('Server Error!');
  }
});

server.listen(8080);

// open http://localhost:8080;
