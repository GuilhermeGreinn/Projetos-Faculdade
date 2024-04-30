
const grupoGrama = ["bulbasaur","ivysaur","venusaur"]
const grupoFogo = ["charmander","charmeleon","charizard"]
const grupoTerra = ["caterpie","metapod"]
const grupoAgua = ["squirtle","wartortle","blastoise"]

function carregarPokemons(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://pokeapi.co/api/v2/pokemon",false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
    const pokemons = resposta.results

    for( let index = 0 ; index < pokemons.length; index ++){
        const pokemon = pokemons[index]
        const id = index + 1
        pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"
        adicionarCardPokemon(pokemon)
    }
}

function adicionarCardPokemon(pokemon){

    console.log(pokemon)

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name

    if(grupoGrama.includes(pokemon.name)){
        textoElemento.classList.add("grama")
    } else if (grupoFogo.includes(pokemon.name)){
        textoElemento.classList.add("fogo")
    } else if (grupoTerra.includes(pokemon.name)){
        textoElemento.classList.add("terra")
    } else if (grupoAgua.includes(pokemon.name)){
        textoElemento.classList.add("agua")
    }

    const divElemento = document.getElementById("conteudo-pokemon")
    divElemento.classList.add("card")
    divElemento.appendChild(imagemElemento)
    divElemento.appendChild(textoElemento)

}
