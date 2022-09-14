var url = 'http://localhost:3000/lancamentos/lancamento'
var lancamentos = []
const allLac = document.querySelector("#allLac")
const allLac2 = document.querySelector("#allLac2")
const listaLancamentos = document.querySelector("#lista-lancamento")
const linhamodelo = document.querySelector(".linhamodelo")

function loadLanc() {
    fetch(url)
    .then(res => {return res.json()})
    .then(data =>{
        lancamentos = data
        preencheTabela()
    })
}

function preencheTabela() {
    let indice = 0
    lancamentos.forEach(e =>{
        if(e.tipo == 'D'){
        let linha = document.createElement("tr")
        let cod = document.createElement("td")
        let data = document.createElement("td")
        let desc = document.createElement("td")
        let valor = document.createElement("td")
        let tipo = document.createElement("td")
         cod.innerHTML = e.n_lancamento
         data.innerHTML = e.data.slice(0,10)
         desc.innerHTML = e.descricao
         valor.innerHTML = e.valor
         tipo.innerHTML = e.tipo
         linha.appendChild(cod) 
         linha.appendChild(data)
         linha.appendChild(desc)
         linha.appendChild(valor)
         linha.appendChild(tipo)
         allLac.appendChild(linha)
         indice++  
        }else if(e.tipo == 'C'){
            let linha = document.createElement("tr")
            let cod = document.createElement("td")
            let data = document.createElement("td")
            let desc = document.createElement("td")
            let valor = document.createElement("td")
            let tipo = document.createElement("td")
             cod.innerHTML = e.n_lancamento
             data.innerHTML = e.data.slice(0,10)
             desc.innerHTML = e.descricao
             valor.innerHTML = e.valor
             tipo.innerHTML = e.tipo
             linha.appendChild(cod) 
             linha.appendChild(data)
             linha.appendChild(desc)
             linha.appendChild(valor)
             linha.appendChild(tipo)
             allLac2.appendChild(linha)
             indice++ 
        }

    })
}