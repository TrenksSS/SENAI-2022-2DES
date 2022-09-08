const listaLancamentos = document.querySelector("#lista-lancamento")
const linhamodelo = document.querySelector(".linhamodelo")

fetch("http://localhost:3000/lancamentos/lancamento")
    .then(res => { return res.json() })
    .then(lancamentos => {
        lancamentos.forEach(lancamento => {
            let linha = linhamodelo.cloneNode(true);
            linha.classList.remove("model");

            let colunas = linha.querySelectorAll("td");
            colunas[0].innerHTML = lancamento.n_lancamento;
            colunas[1].innerHTML = lancamento.data;
            colunas[2].innerHTML = lancamento.descricao;
            colunas[3].innerHTML = "R$ " + lancamento.valor;
            colunas[4].innerHTML = lancamento.tipo;

            
            listaLancamentos.appendChild(linha);
        })
        
    })