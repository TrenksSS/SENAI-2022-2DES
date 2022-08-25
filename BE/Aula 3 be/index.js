const express = require("expres")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'cliente'
})

app.get('/',(req,res)=>{
    // res.jason("Oi qq c qué, eu so um back, mas não aquele que tu ta pensando")
    let string = "select * from vw_clientes"
    con.query(string,(err,result)=>{
        if(err== null){
            res.json(result)
        }
    })
})

app.listem(5000, () => {
    console.group("Respondendo na porta 5000")
})