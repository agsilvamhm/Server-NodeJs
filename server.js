const http = require('http');
const host = 'http://localhost';
const porta = 3000;

http.createServer((req, res) => {
    res.end('<h1>Working</h1>')
}).listen(porta, () => {
    console.log(`Server is running! ${host}:${porta}`);
});
