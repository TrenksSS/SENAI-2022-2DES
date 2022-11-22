const toCreateDep = (model) => {
    return `INSERT INTO departamentos VALUES (${model.Cod_Depto},'${model.Nome_Depto}')`;
}
const toDelete = (model) => {
    return `DELETE FROM departamentos WHERE Cod_Depto=${model.Cod_Depto}`;
}
module.exports = {
toCreateDep,
toDelete
}