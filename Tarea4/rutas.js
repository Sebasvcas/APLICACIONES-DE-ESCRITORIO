const express = require('express');


function cargarHome(req, res) { 
    console.log('api works');
    res.render('news',{
        nombre: 'Sebas Vallejo'
    });
}

module.exports = function(app) {   
    app.get('/', cargarHome);
    
    app.get('*', function(req, res) {   
        res.send('404');
    });
}


