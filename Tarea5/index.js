const express = require('express');
const rutas = require('./rutas');   //Y ya podemos usar aquI las rutas que exportamos en rutas.js
const routes = require('./src/rutas');
require('dotenv').config();
const mongoose = require('mongoose');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');

const { engine } = require('express-handlebars');

const app = express();

const mongoUrl = process.env.MONGO_URL//npm install dotenv

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));

app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = process.env.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

console.log(mongoUrl);
app.use('', routes);    //Primero uso las nuevas. Para que el comodIn de las viejas no salga primero al usar la ruta /usuarios
rutas(app); //Y aquI estamos usando la funciOn de rutas.

mongoose.connect(mongoUrl).then(()=>{
    console.log("Se conecto a la base  de datos")
    app.listen(port,function() {
        console.log('app is running in port ' + port)
    });
   
}).catch(err =>{
    console.log("No se pudo comecatr a la base  de datos",err);
});

