var item = document.querySelector("#item")

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((info) => {
    info.forEach(cliente => {
        let novoItem = item.cloneNode(true);

        novoItem.querySelector("#id-item").innerHTML = cliente.id;
        novoItem.querySelector("#titulo").innerHTML = cliente.title;
        novoItem.querySelector("#box").checked = cliente.completed;

        document.querySelector(".cont").appendChild(novoItem);
    })
})