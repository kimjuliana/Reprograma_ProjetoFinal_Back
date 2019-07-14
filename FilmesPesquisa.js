const button = document.querySelector('.btn-secondary')
const lista = document.querySelector('.listaFilmes')

button.addEventListener('click', (evento) =>{
    evento.preventDefault();
    const genero = document.querySelector('.genero').value
    listaFilmes.innerHTML="";

    fetch(`http://localhost:3000/filmes/search/?genero=${genero}`
 
    ).then((response) => {
        return response.json();
    })
    .then((filmes) => {
        console.log("este filme" + filmes)
        filmes.forEach(filme =>{
            console.log(filme)

            let box = document.createElement("div");
            box.innerHTML=`
                <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                    <h5 class="card-title"><strong>Titulo:</strong> ${filme.Nome}</h5>
                    <p class="card-genero">Gênero: ${filme.genero}</p>
                    <p class="card-ano">Ano: ${filme.Ano}</p>
                    <p class="card-direcao">Direção: ${filme.direcao}</p>
                    <p class="card-produtora">Produtora: ${filme.produtora}</p>
                    <img width="215px" src=" ${filme.imagem}">
                    </div>
                </div>
                </div>
                ` 
               
                lista.appendChild(box)
        })
    })
    })
