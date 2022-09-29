const toReadAll = () => {
    return "SELECT * FROM itens"
}
const toCreate = (model) => {
    return `INSERT INTO itens VALUES (${model.ni}, '${model.aquisicao}', ${model.valor}, '${model.img}')`
}
const toDelete = (model) => {
    return `DELETE FROM itens WHERE ni=${model.ni}`
}

module.exports = {
    listarItens,
    criarItens,
    excluirItens
}