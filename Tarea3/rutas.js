
const express = require('express');
const auth = require('./src/middlewares').auth;   //La llamamos asi porque cuando lo llamamos tenemos este nombre.


function cargarHome(req, res) { //Funciona usando "http://localhost:3000/?token=123" en la url.
    //const paginado = req.query.paginado === 'false' ? false:true;
    console.log('api works');
    //res.send('api works for' + req.usuario);
    //res.sendFile(path.join(__dirname,'src', 'views', 'index.html'));  //Es lo mismo que la lInea de abajo.
    //res.sendFile(__dirname + '/views/index.html');  //Para encontrar la ruta con respecto a el archivo rutas.
    res.render('info',{
        nombre: 'Sebas Vallejo'
    });
}

module.exports = function(app) {    //Y ya podemos usar las rtas en otros archivos. ES UNA FUNCION

     //Para cargar desde el navegador los estilos. MIDDLEWARE.

    app.get('/',auth, cargarHome);
    
    app.get('*', function(req, res) {   //El comodIn va al final. //*Significa cualquier cosa. Lo que pongamos despuEs de localhost:3000/...
        res.render('404');
    });
}




