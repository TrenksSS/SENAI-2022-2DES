const toCreate = (model) => {
    return `INSERT INTO produtos VALUES (${model.Cod_Produto},'${model.Nome_produto}')`;
}

const toReadAll = () => {
    return "SELECT * FROM produtos";
}
const readNome = ()=>{
    return `SELECT * FROM vw_produtos WHERE nome_produto`
{

}

module.exports = {
    toCreate,
    toReadAll,
}