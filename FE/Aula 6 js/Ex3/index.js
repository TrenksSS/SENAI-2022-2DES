var funcionario = [
	{   
        "img":"assets/do-utilizador.png",
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nível":2
		},
		"autorizado":true
	},		
	{
        "img":"assets/do-utilizador.png",
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nível":2
		},
		"autorizado":true
	},
	{
        "img":"assets/do-utilizador.png",
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":1
		},
		"autorizado":false
	},
	{
        "img":"assets/do-utilizador.png",
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nível":3
		},
		"autorizado":true
	},
	{
        "img":"assets/do-utilizador.png",
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nível":3
		},
		"autorizado":true
	},	
	{
        "img":"assets/do-utilizador.png",
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
	
    funcionario.forEach(item => {
	
    let novoFuncionario = infoFuncionario.cloneNode(true)
    let btn = novoFuncionario.querySelector("#botao-lixo")
    novoFuncionario.classList.remove("modelo")

    
        novoFuncionario.querySelector("#img-funcionario").src = item.img
        novoFuncionario.querySelector("#nome-funcionario").innerHTML = item.funcionario
        novoFuncionario.querySelector("#nivel").innerHTML = item.cargo.nível
        novoFuncionario.querySelector("#cargo").innerHTML = item.cargo.nome
		if(item.cargo.nível !=3){
			console.log(btn)
			btn.classList.remove("botao")
		}

        document.querySelector(".funcionarios").appendChild(novoFuncionario)
		
	})
}
function removerItem(e){
	e.parentNode.remove()
}
