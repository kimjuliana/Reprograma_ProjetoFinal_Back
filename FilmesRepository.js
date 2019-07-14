const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://juliana:juliana22@ds135217.mlab.com:35217/heroku_kd6fzrlb';


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