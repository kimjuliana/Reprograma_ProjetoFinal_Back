const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const FilmesSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto:true},
    nome: {type: String, required:true},
    genero: { type: String},
    Ano: { type: Number},
    produtora: { type: String},
    direcao: { type:String},
    imagem: {type: String}
})

const filmesModel = mongoose.model('filmes', FilmesSchema);

module.exports = filmesModel;