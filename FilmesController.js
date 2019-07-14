const { connect} = require('./FilmesRepository')
const filmesModel = require('./FilmesSchema')

connect()

const getAll = async () => {
    return filmesModel.find()
}

const getSearchGenero = async (generoFilme) => {
    console.log(generoFilme)
        return filmesModel.find({genero:generoFilme}, (error, filmes) =>{
            console.log(filmes)
            return filmes
        })
    }

const getById = (id)=> {
     return filmesModel.findById(id)
 }

 const add = (filme) => {
     const novoFilme = new filmesModel(filme)
     return novoFilme.save()
 }

 const remove = (id) => {
     return filmesModel.findByIdAndDelete(id)
 }

 const update = (id, filme) => {
     return filmesModel.findByIdAndUpdate(
         id,
         { $set: filme},
         { new: true },
     )
 }

 module.exports = {
     getAll, 
     getById,
     add,
     remove,
     update,
     getSearchGenero
 }