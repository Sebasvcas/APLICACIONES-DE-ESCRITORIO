function middleware(req, res, next) {   //Middleware de autenticaciOn.
    if(req.query.token === '123') {
        //console.log(req.query);
        console.log('PasE por aquI');
        req.usuario = "Sebastian vallejo castañeda";
        next(); //Para que no se quede esperando respuesta en el navegador. Y tenemos el send.
    } else {
        res.status(401).send('Token no autenticado');
    }
    
    //res.send('no pasas');
}

module.exports = middleware;