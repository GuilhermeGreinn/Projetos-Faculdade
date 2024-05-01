function onPageLoad(){

    fetch("https://randomuser.me/api/?results=50")
    .then(function response(data){data.json()
        .then(response =>{insertUsers(response.results)})

    })

    loadComponents()

    }

function insertUsers(data){
    console.log(data)

}

function loadComponents(){
    console.log("loadComponents")

}
