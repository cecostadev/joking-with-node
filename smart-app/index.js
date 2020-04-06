const express = require('express');
const port = 8000;
const smartphone = require('./src/routes/smartphone');
const app = express();


app.use('/', smartphone);




app.listen(port, ()=>{
    console.log(`Server on, listening ... ${port}`)
});