const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use (cors());
app.use(express.json());

const con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'lancamentos'
})
app.get('/lancamentos/lancamento',(req, res)=>{
    let string = "select * from lancamento";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result)
        }
    })
})

app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});