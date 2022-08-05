const express = require('express');
const mysql = require('mysql');
const app = express();
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
});

app.use(express.json());

app.get('/backnode', (req, res) => {

    let priNome = req.query.priNome
    let sobrenome = req.query.sobrenome
    let endereco = req.query.endereco

    let string = `insert into clientes value(null, '${priNome}','${sobrenome}','${endereco}')`;

    con.query(string, (err, result) => {

        if (err == null) {
            res.json("Dados recebidos com sucesso, estamos enviando para nosso Banco de dados");
        } else {
            res.jason("Dados recebidos com sucesso, porem não conseguimos enviar para o banco de dados.")
        }

    })
});

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});