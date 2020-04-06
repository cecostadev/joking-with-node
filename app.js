//Carrying HTTP module
const http = require('http');


//Creating an object http and declaring request and response
const server = http.createServer((request, response) =>{
    //Sending the response to the browser
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World!');
})

const port = process.env.PORT || 8080;

server.listen(port);

console.log('Servidor na porta:' + port);