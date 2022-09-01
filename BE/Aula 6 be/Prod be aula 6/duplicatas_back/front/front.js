fetch("http://localhost:3000/duplicatas/clientes")
.then((res) => {
    return res.json();
})
.then((data) => {
    data.forEach(todo => {
        let novoItem = document.querySelector(".cont").cloneNode(true);

        novoItem.classList.remove("model");

        novoItem.querySelector("#user-id").append(todo.cod_cli);
        novoItem.querySelector("#nome").append(todo.nome);
        novoItem.querySelector("#end").append(todo.endereco);
        novoItem.querySelector("#bairro").append(todo.bairro);
        novoItem.querySelector("#cidade").append(todo.cidade);
        novoItem.querySelector("#uf").append(todo.uf);
        novoItem.querySelector("#finalizado").checked = todo.completed;

        document.querySelector(".lista").appendChild(novoItem);
    });
});