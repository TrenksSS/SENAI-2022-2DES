var item = document.querySelector("#login")
var achou = false
function logar(){
    let userr = document.querySelector("#user").value
    let senha = document.querySelector("#senha").value

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((info) => {
    info.forEach(cliente => {
        
        let valUser = cliente.email
        let valSenha = cliente.username
        
        if (userr == valUser && senha == valSenha) {
            achou = true


            let infoUser = {
                'id':cliente.id,
                'name':cliente.name
            }
            window.localStorage.setItem("infoUser",JSON.stringify(infoUser))
            location.href = "pagina.html"
        }
    })
    if(achou == false) {
        alert( "Senha ou usuário inválido")
      }
})
}