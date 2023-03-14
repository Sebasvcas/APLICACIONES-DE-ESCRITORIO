
const modelo = require('../modelos/news');

class newsController {
   
    newsList(req, res) {
        modelo.buscar(req.query.query)
                .then(news => {
                    res.render('news',{news:news});
                })
                .catch(error => {
                    res.status(400).send('Algo salio mal');
                });
    }
  }
  const news = new newsController;
  module.exports = news;

