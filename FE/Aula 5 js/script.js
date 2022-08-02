let itemLista = document.createElement("div")
itemLista.className ="item-lista"

let thumbnail = document.createElement("img")
thumbnail.src = "assets/xurumelas.jpg"
thumbnail.id = "thumb"
thumbnail.alt = "Foto do restaurante"

let like = document.createElement("img")
like.src = "assets/vazio.png"
like.id = "like"
like.alt = "Icone de coracaozin"

let avaliacao = document.createElement("img")
avaliacao.src = "assets/star.png"
avaliacao.id = "avaliacao"
avaliacao.alt = "Avaliacao"


let info = document.createElement("div")
info.id = "info"

let nomeRestaurante = document.createElement("p")
nomeRestaurante.innerHTML = "Xurumelas bar 2.0 Muito mais melhor do que antes"

let textoAvaliacao = document.createElement("p")

textoAvaliacao.appendChild(avaliacao)
    textoAvaliacao.append("4.8")

    info.appendChild(nomeRestaurante)
    info.appendChild(textoAvaliacao)

    itemLista.appendChild(thumbnail)
    itemLista.appendChild(info)
    itemLista.appendChild(like)
    document.querySelector(".lista").appendChild(itemLista)
