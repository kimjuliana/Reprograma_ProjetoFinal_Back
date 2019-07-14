const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./FilmesController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/filmes', async (request, response) => {
    controller.getAll()
    .then(filmes => response.send(filmes))
})

servidor.get('/filmes/search', async (request, response) => {
    const genero = request.query.genero
    controller.getSearchGenero(genero)
    .then(filme => {
        console.log (filme)
        response.send(filme)
    })
})
servidor.post('/filmes', (request, response) => {
    controller.add(request.body)
    .then(filme => {
        const _id = filme._id
        response.send(_id)
    })
    .catch(error => {
        if(error.name === "ValidationError"){
            response.sendStatus(400)
        }else {
            response.sendStatus(500)
        }
    })
})
servidor.patch('/filmes/:id', async (request, response) => {
    const id = request.params.id
    controller.update(id, request.body)
    .then(response.sendStatus(204))
})

servidor.delete('/filmes/:id', (request, response) => {
    controller.remove(request.params.id)
    .then(filme => {
        if(!filme){
            response.sendStatus(404)
        }else {
            response.sendStatus(204)
        }
    })
    .catch(error => {
        if(error.name === "CastError") {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
})

servidor.listen(3000)
console.log("Servidor Funcionando")