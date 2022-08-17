const usuario = JSON.parse(window.localStorage.getItem("infoUser"))

var nomeUsuario = document.querySelector("#user-name")
var listPost = document.querySelector("#posts")
var itemPost = document.querySelector(".post")


nomeUsuario.innerHTML = usuario.name

fetch("https://jsonplaceholder.typicode.com/posts?userId="+usuario.id)
.then(res => {return res.json()})
.then(posts => {
    console.log(posts)
    posts.forEach(post => {
        
        let novoPost = itemPost.cloneNode(true)
        // novoPost.classlist.remove("model")

        novoPost.querySelector("#post-title").innerHTML = post.title
        novoPost.querySelector("#post-cont").innerHTML = post.body

        listPost.appendChild(novoPost)
    })
    
})

