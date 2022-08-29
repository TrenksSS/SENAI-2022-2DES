var item = document.querySelector("#login")
var achou = false
function logar(){
    let userr = document.querySelector("#inUser").value
    let senha = document.querySelector("#inSenha").value

fetch("http://localhost:5000/academia/alunos")
.then((response) => {
    return response.json()
})
.then((info) => {
    info.forEach(aluno => {
        
        let valUser = aluno.nome
        let valSenha = aluno.id_aluno
        
        if (userr == valUser && senha == valSenha) {
            achou = true


            let infoUser = {
                'id':aluno.id_aluno,
                'name':aluno.name
            }
            window.localStorage.setItem("infoUser",JSON.stringify(infoUser))
            location.href = "site.html"
        }
    })
    if(achou == false) {
        alert( "Senha ou usuário inválido")
      }
})
}