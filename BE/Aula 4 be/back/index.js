const Express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "lojinha"
});

app.get("/produtos/:cod", (req,res)=>{
    let query =`SELECT * FROM produtos WHERW cod = '${req.params.cod}'`;

    conDB.query(query, (err, result)=> {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
})

const app = Express();
app.use(Express.json());
app.use(cors());

app.get("/produtos", (req, res)=>{
    let query = "SELECT * FROM produtos";

    conDB.query(query, (err, result)=>{
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(402).end();
        }
    })
});

app.post("/produtos", (req, res)=> {

    let query = `INSERT INTO produtos VALUES (DEFAULT, '${req.body.cod}', '${req.body.nome}', ${req.body.qntd}, ${req.body.preco})`;

    conDB.query(query, (err, result) =>{
        if(err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    });

});

app.listen(4000, ()=>{
    console.log("App ON");
});