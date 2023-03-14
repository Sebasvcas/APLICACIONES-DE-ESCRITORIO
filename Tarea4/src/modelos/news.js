const axios = require('axios');


const news = {
    buscar: (query) => {
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=f4e87c87e9b54704aeaeea76a74efd88`
        return axios.get(url).then(response=> {
            const noticias = response.data.articles.map(noticia => ({
                titulo: noticia.title,
                imagen:noticia.urlToImage,
                descripcion:noticia.description,
                urlpage: noticia.url
            }));
        console.log(noticias);
        return noticias;
        })
        .catch(error => {
            res.status(400).send('error al cargar noticias'); 
        })
    }
}

module.exports = news;