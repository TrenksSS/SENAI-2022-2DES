[
	{   
        "img":"./assets/do-utilizador.png",
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nível":2
		},
		"autorizado":true
	},		
	{
        "img":"./assets/do-utilizador.png",
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nível":2
		},
		"autorizado":true
	},
	{
        "img":"./assets/do-utilizador.png",
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":1
		},
		"autorizado":false
	},
	{
        "img":"./assets/do-utilizador.png",
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nível":3
		},
		"autorizado":true
	},
	{
        "img":"./assets/do-utilizador.png",
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":3
		},
		"autorizado":true
	},	
	{
        "img":"./assets/do-utilizador.png",
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nível":3
		},
		"autorizado":true
	}
]

var infoFuncionario = document.querySelector(".info-funcionario")

function carregar(){
    carrinho.forEach(item => {
    let novoFuncionario = infoFuncionario.cloneNode(true)
    novoFuncionario = infoFuncionario.cloneNode(true)
    novoFuncionario.classList.remove("modelo")

    
        novoItem.querySelector("#img-funcionario").src = item.img
        novoItem.querySelector("#nome-funcionario").innerHTML = item.funcionario
        novoItem.querySelector("#nivel").value = item.cargo.nível
        novoItem.querySelector("#cargo").innerHTML = item.cargo.nome

        document.querySelector(".carrinho").appendChild(novoItem)
    })
}
function removerItem(e){
    e.parentNode.remove()
}