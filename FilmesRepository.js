const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://juliana:juliana@ds157735.mlab.com:57735/heroku_95nqck4j';

function connect () {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true},
        function (error) {
            if(error) {
                console.log('Erro: ', error)
            }else{
                console.log('Conectado ao mongo')
            }
        });
}
module.exports = { connect}