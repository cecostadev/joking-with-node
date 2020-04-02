//Carregando módulo nativo HTTP
const http = require('http');


//Criando objeto do tipo http e disponibilizando req e resp.
const server = http.createServer((request, response) =>{
    //Respondendo Hello Worl para a primeira req.
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World!');
})

const port = process.env.PORT || 8080;

server.listen(port);

console.log('Servidor na porta:' + port);