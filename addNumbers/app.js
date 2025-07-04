const http = require('http');
const url = require('url');
const add = require('./add');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    if (parsedUrl.pathname === '/add') {
        const x = parseFloat(query.x);
        const y = parseFloat(query.y);

        if (isNaN(x) || isNaN(y)) {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('<h1>Error: Invalid numbers provided</h1>');
        } else {
            const result = add(x, y);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>${x} + ${y} = ${result}</h1>`);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});