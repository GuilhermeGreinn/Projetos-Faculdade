function procurarCep(){
    const elementonumeroCep = document.getElementById("numeroCep")
    const numeroCep = elementonumeroCep.value

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET", "https://viacep.com.br/ws/"+numeroCep+"/json/", false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
   

    adicionarCep(resposta)

}


function adicionarCep(cep){

    const elementoConteudoCep = document.getElementById("conteudoCep")
    const elementoNovoCep = document.createElement("p")
    elementoNovoCep.innerHTML = cep.logradouro + ", " + cep.bairro + ", " + cep.localidade
    elementoConteudoCep.appendChild(elementoNovoCep)
    
}