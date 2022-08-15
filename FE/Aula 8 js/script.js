function salvar() {
    let infoUser = {
        "id":"123",
        "nome":"Beltrano",
        "avatar":"http...."
    }

    let infoTexto = JSON.stringify(infoUser)

    window.localStorage.setItem("userData", infoTexto)
}

function carregar() {
    
    let info = window.localStorage.getItem("userData")
    let objUser = JSON.parse(info)
    console.log(objUser)
    console.log(info)
}

function apagar() {
    // window.localStorage.removeItem("userData")
    // window.localStorage.clear()
    
}