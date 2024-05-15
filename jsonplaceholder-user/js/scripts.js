function savePost(){
    const bodyPost = getBodyPost()

    fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",
    body: bodyPost
    })
    .then(data => data.json())
    .then(response => console.log(response))
}

function getBodyPost(){

    const inputTitle = document.getElementById("input-title")
    const inputBody = document.getElementById("input-body")
    const inputUserId = document.getElementById("input-user-id")

    const body = JSON.stringify({
        userId: inputTitle,
        title: inputBody,
        body:  inputUserId
    })
    return body
}

function updatePost(){
    const bodyPost = getBodyPost()
    fetch("https://jsonplaceholder.typicode.com/posts/100",{
    method : "PUT",
    body: bodyPost
    })
    .then(data => data.json())
    .then(response => console.log(response))
}

function removePost(){
    const bodyPost = getBodyPost()
    fetch("https://jsonplaceholder.typicode.com/posts/100",{
    method : "DELETE",
    })
    .then(data => data.json())
    .then(response => console.log(response))
}