const email = document.querySelector("#email")
const psw = document.querySelector("#senha")


function login() {
    let info = {
        "nome": email.value,
        "senha": psw.value
    }
    fetch("http://10.87.207.2:3000/login", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json()})
    .then(data => {
        if( data[0]  != undefined) {
            localStorage.setItem("info", JSON.stringify({"nome":data.nome}))

            window.location.href = "../SALGADOS/index.html"
        }else {
            alert("Usuario ou Senha Invalidos")
        }
        
    })
}