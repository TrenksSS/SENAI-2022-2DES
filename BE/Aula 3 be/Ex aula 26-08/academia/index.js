const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const { application } = require("express");

const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.get('/academia/alunos',(req,res)=>{
    let string = "select * from alunos";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});
app.get('/academia/aparelhos',(req,res)=>{
    let string = "select * from aparelhos";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});
app.get('/academia/exercicios',(req,res)=>{
    let string = "select * from exercicios";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});
app.get('/academia/fixas',(req,res)=>{
    let string = "select * from fixas";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});
app.get('/academia/telefones',(req,res)=>{
    let string = "select * from telefones";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});


app.listen(5000, () => {
    console.log("Respondendo na porta 5000");
});