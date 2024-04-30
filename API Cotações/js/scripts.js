function carregarCotacao(){
    const elementonomeCotacao = document.getElementById("escolhaCota")
    const escolhaCota = elementonomeCotacao.value

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET", "https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL", false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)

    adicionarCotacao(resposta.USDBRL)
    adicionarCotacao(resposta.BTCUSD)
    adicionarCotacao(resposta.BTCBRL)
}

function adicionarCotacao(cotacao1){
    const elementoConteudoCotacao1 = document.getElementById("conteudoCotacao")
    const elementoNovoCotacao1 = document.createElement("p")
    elementoNovoCotacao1.innerHTML = cotacao1.code + ", " + cotacao1.codein + ", " + cotacao1.bid 
    elementoConteudoCotacao1.appendChild(elementoNovoCotacao1)

}