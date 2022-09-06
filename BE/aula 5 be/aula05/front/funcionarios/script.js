const listafuncionarios = document.querySelector("#lista-funcionarios")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputCodigo = document.querySelector("#codigo");
const inputNome = document.querySelector("#nome");
const inputQuantidade = document.querySelector("#quantidade");
const inputValor = document.querySelector("#valor");

const btCadedit = document.querySelector("#cadedit");

fetch("http://localhost:3000/funcionarios")
.then(res => { return res.json() })
.then(funcionarios => {
    funcionarios.forEach(funcionario => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = funcionario.cod;
        colunas[1].innerHTML = funcionario.nome;
        colunas[2].innerHTML = funcionario.qntd;
        colunas[3].innerHTML = "R$ " + funcionario.preco;

        linha.querySelector("#exclui").addEventListener("click", () => {
            modalExcluir.classList.remove("model");
            modalExcluir.querySelector("#cod").innerHTML = funcionario.cod;
        })

        linha.querySelector("#edita").addEventListener("click", () => {
            modalEditar.classList.remove("model"); 
            btCadedit.innerHTML = "Editar";
            btCadedit.onclick = () => { editarfuncionario() }
            inputCodigo.value = funcionario.cod;
            inputNome.value = funcionario.nome;
            inputQuantidade.value = funcionario.qntd;
            inputValor.value = funcionario.preco;
        })

        listafuncionarios.appendChild(linha);
    });
});

function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function abrirModalCadastro() {
    btCadedit.innerHTML = "Cadastrar";
    btCadedit.onclick = () => { cadastrarfuncionario(); }
    inputCodigo.value = "";
    inputNome.value = "";
    inputQuantidade.value = "";
    inputValor.value = "";
    modalEditar.classList.remove("model");
}

function editarfuncionario() {
    let funcionario = {
        "cod":inputCodigo.value,
        "nome":inputNome.value,
        "qntd":inputQuantidade.value,
        "preco":inputValor.value,
    }

    fetch("http://localhost:3000/funcionario", {
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(funcionario)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("funcionario Alterado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}

function excluirfuncionario() {
    let data = {
        "cod":document.querySelector("#cod").innerHTML
    }

    fetch("http://localhost:3000/funcionario", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("funcionario Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir funcionario !");
        }
    });
}

function cadastrarfuncionario() {
    let funcionario = {
        "cod": inputCodigo.value,
        "nome": inputNome.value,
        "qntd": inputQuantidade.value,
        "preco": inputValor.value
    };

    fetch("http://localhost:3000/funcionarios", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(funcionario)
    })
    .then(res => {return res.json()})
    .then(resp => {
        if(resp.cod !== undefined){
            alert("funcionario Cadastrado Com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao cadastrar funcionario");
        }
     })
}