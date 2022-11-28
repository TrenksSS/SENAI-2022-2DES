
const itemlista = document.querySelector(".item");
const lista = document.querySelector(".itens");


fetch("http://10.87.207.2:3000/salgados")
.then(resp => {return resp.json()})
.then(salgados => {
    salgados.items.forEach(data => {
        let item = itemlista.cloneNode(true);

        item.classList.remove("model");

        item.querySelector("img").src = "../assets/" + data.foto;

        item.querySelector("#nome").innerHTML = data.nome;
        
        item.querySelector("#desc").innerHTML = data.descricao;

        lista.appendChild(item);
    })
})

function ir() {
    window.location.href = "../SALGADOS/index.html"
}