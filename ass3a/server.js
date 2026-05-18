const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let file = 'index.html';

    if (req.url === '/style.css') {
        file = 'style.css';
    }

    fs.readFile(file, (err, data) => {

        if (err) {
            res.writeHead(404);
            res.end("File Not Found");
            return;
        }

        if (file.endsWith('.css')) {
            res.writeHead(200, {'Content-Type': 'text/css'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
        }

        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});