const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/projeto';

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