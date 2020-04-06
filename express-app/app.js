const express = require('express');
const app =  express();

app.get('/', (request, response) =>{
    response.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening localhost on port : ${port}`);
})