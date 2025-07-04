
const http = require('http');
const greet = require('./greet');

const server = http.createServer((req, res) => {
    if (req.url === '/sher') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>${greet('Sher')}</h1>`);
    } else if (req.url === '/jj') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>${greet('JJ')}</h1>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(3002, () => {
    console.log('Server running at http://localhost:3001');
});


