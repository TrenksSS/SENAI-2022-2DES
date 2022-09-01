const clientes = (lista)=>{
    lista.forEach(e=>{
        e.telefones = [];
        let tel = {};
        tel.tipo = e.tipo;
        tel.numero = e.telefone;
        e.telefones.push(tel);
        delete e.tipo;
        delete e.telefone;
    });

    

    return lista;
}
module.exports = {
    clientes
}