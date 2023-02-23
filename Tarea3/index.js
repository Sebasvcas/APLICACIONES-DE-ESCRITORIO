const express = require('express');
const routes = require('./src/rutas');
const rutas = require('./rutas'); 

const {engine} = require('express-handlebars');


const app = express();

app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./src/views');

const port = 3000;

app.use('', routes);
rutas(app);

app.listen(port,function() {
    console.log('app is running in port ' + port)
});

