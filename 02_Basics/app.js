// Creating a NodeJS Server

// require is a built-in Node.js module that allows you to import and use external modules
const http = require('http');

// function rqListener(req, res) {
//     res.end('Hello World');
// }

const server = http.createServer((req, res) => {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Hello World</h1>');
    res.write('<html>');
    res.end();
});

// listen for incoming requests - pass in a port
server.listen(3000);