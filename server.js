const http = require('http');
const host = 'http://localhost';
const porta = 3000;
const stats = require('./pcRunUsage.js');

http.createServer((req, res) => {
    let url = req.url;

    if (url === '/stats'){
        res.end(JSON.stringify(stats, null,2));
    } else {
        res.end('<h1>Seja bem vindo!</h1>');
    }
   
}).listen(porta, () => {
    console.log(`Server is running! ${host}:${porta}, ${stats}`);
});
