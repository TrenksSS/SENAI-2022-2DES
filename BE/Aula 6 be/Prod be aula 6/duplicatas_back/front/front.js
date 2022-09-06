const modalTels = document.querySelector("#modalTels");
const tels = document.querySelector("#telefones");

fetch("http://localhost:3000/duplicatas/clientes")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        clientes = data;
        data.forEach(todo => {
            
            let novoItem = document.querySelector(".user").cloneNode(true);

            novoItem.classList.remove("model");

            novoItem.querySelector("#cod_cli").append(todo.cod_cli);
            novoItem.querySelector("#nome").append(todo.nome);
            novoItem.querySelector("#end").append(todo.endereco);
            novoItem.querySelector("#bairro").append(todo.bairro);
            novoItem.querySelector("#cidade").append(todo.cidade);
            novoItem.querySelector("#uf").append(todo.uf);

            document.querySelector(".cont").appendChild(novoItem);
        });
    });
    function mostraTels() {
        modais.setAttribute("style","display:flex;");
        modalTels.setAttribute("style","display:flex;");
        tels.innerHTML = "";
        clientes.telefones.forEach(e=>{
            let linha = document.createElement("p");
            let tipo = document.createElement("p");
            let numero = document.createElement("p");
            tipo.innerHTML = e.tipo;
            numero.innerHTML = e.numero;
            linha.appendChild(tipo);
            linha.appendChild(numero);
            telefones.appendChild(linha);
        });
    }