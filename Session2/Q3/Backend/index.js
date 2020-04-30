
const http = require('http');

const port = 8080;
const hostname = 'localhost';

const handleRequestResponse=(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { 'Content-type': 'application/json' });
    if (req.url === '/home') {
    res.end("This is Home Page");
    } else if (req.url === '/about') {
    res.end('This is About Page');
    } else if (req.url === '/contact') {
    res.end('This is Contact Us Page');
    }
    res.end('Invalid URL')
    }

const server = http.createServer(handleRequestResponse);

// server is listening

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))
