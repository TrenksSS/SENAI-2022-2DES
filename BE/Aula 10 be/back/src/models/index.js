const toCreate = (model)=>{
    return `call solicita_um_item (${model.n_sol}, ${model.n_dep},${model.n_func},${model.n_prod},${model.qnt},${model.total})`
}

const listarView = ()=>{
    return "SELECT * FROM `vw_solicitacoes`" 
}

module.exports={
    toCreate,
    listarView
}