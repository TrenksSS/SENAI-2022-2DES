const logins = [
    {
        "user":"adm",
        "senha":"a123"
    },
]
function logar() {
    logins.forEach(user => {

        let userr = document.getElementById("user").value
        let senha = document.getElementById("senha").value

        let valUser = user.user
        let valSenha = user.senha

        

        if (userr == valUser && senha == valSenha) {
            alert("Entrou!")
            location.href = "loja.html"
        }else {
            alert("Usuario ou Senha invalido!")
        }
        
    })
}