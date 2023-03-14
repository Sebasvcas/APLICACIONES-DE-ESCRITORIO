class userController {
    createuser(req, res) {    //El /usuarios en la ruta estA implicito, pero ya lo definimos asI en el index.
        res.send('usuario creado');
    }

    updateuser(req, res) {
        res.send('usuario actualizad correctamente');
    }

    userlist(req, res) {
        res.send('lista de usuarios');
    }

    getuser(req, res) {
        const id = req.params.id;
        res.send('detalles del usuario ' + id);
    }

  }

  const user = new userController;
  module.exports = user;