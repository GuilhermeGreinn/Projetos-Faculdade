function carregarHerois(){
    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET", "https://akabab.github.io/superhero-api/api/all.json", false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
    const herois = resposta

    for(let index = 0 ; index < herois.length ; index ++){
        const heroi = herois[index]
        adicionarCardHeroi(heroi)
    }
}

function adicionarCardHeroi(heroi){
    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", heroi.images.lg)
    imagemElemento.style.width = "90%"

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = heroi.name

    const divElemento = document.getElementById("conteudo-heroi")

    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)

    divElemento.appendChild(divCardElemento)

}