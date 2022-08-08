var modelo = document.querySelector(".modelo")

function duplicar(){
    let novo = modelo.cloneNode(true)

    novo.classList.remove("modelo")

    document.querySelector("body").appendChild(novo)
}