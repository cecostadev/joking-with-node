const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const smartphone = require('./src/routes/smartphone');
const app = express();
const mongoose = require('mongoose');

let url = 'mongodb+srv://cadussb:cadujoga10@smartapp-kcrlu.mongodb.net/test?retryWrites=true&w=majority';
let mongo = process.env.MONGODB_URI || url;

mongoose.connect(mongo);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(
    console, 'Erro no Mongo DB'
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/', smartphone);



app.listen(port, ()=>{
    console.log(`Server on, listening ... ${port}`)
});