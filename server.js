require('./models/db');

const express =require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const inscriptionController = require('./controllers/inscriptionController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000,() => {
  console.log('express started at port: 3000');
});
app.use('/inscriptions',inscriptionController);
