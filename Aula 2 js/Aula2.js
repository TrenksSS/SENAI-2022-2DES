// var texto = document.getElementsByTagName("h1");

// // console.log(texto);

// var titulo = document.getElementById("titulo");

// titulo.innerHTML = "Fulano da Silva"
// //para alterar a informação de uma teg

// var aluno = {
//     nome: "Fulano",
//     matricula: 234578
// };

// titulo.innerHTML = `Nome : ${aluno.nome} </br> Matricula : ${aluno.matricula}`;

// titulo.style.color = "green";
// //titulo.style.margin = "200px";

// var mensagem = document.getElementById("mensagem");
// //como chamar um id no js

// mensagem.style.display = "block";

// var divisao = document.getElementsByClassName("divisao");
// //como chamar uma class no js

// // document.querySelector();
// // document.querySelectorAll();

// var titulo2 = document.querySelector("#titulo"); //como chamar im id de forma mais facil
// var div = document.querySelector(".divisao");  //como chamar uma class de maneira mais facil
// var msg = document.querySelector("h1");  //como chamar ima tag mais facil

// var v1 = 1;
// var v2 = "1";

// if(v1 == v2){
//     console.log("SOMOS IGUAIS") //como o valor é igual ele reconhece como igual para ver se são realmente igual assim como a classe igual teria que usar 3 iguais ===.
// }


var busca = document.querySelector("#busca");

var linhas = document.querySelectorAll("tr");

var btBusca = document.querySelector("button");

btBusca.addEventListener("click", buscarNome);

busca.addEventListener("keyup", buscarNome);

function buscarNome(){
    console.log(busca.value);
    let encontrei = false;

    linhas.forEach((linha) => {
        let temp = linha.querySelector("td");
         if(temp != null){
        //     if(temp.innerHTML.toLocaleLowerCase() == busca.value.toLocaleLowerCase()) {
        //         alert("Encontrei!!");
        //         encontrei = true;
        //         linha.style.fontWeight = "bold";
        //         linha.style.color = "pink";
            // }
        //     if(temp.innerHTML.toLocaleLowerCase().includes(busca.value.toLocaleLowerCase())){
        //         linha.style.display = "table-row";
        //     }else {
        //         linha.style.display = "none";
        //     }

        // }
        if(linha.innerHTML.toLowerCase().includes(busca.value.toLowerCase())){
            linha.style.display = "table-row"
        }else {
            linha.style.display ="none"
        }
    }
    }
    )
    // if(!encontrei) alert("Não encontrei");
};
