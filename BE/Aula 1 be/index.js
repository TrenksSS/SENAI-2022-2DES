const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req, res)=>{
    res.json("Alo mundo");
});

app.listen(3000,()=>{
    console.log("Respontendo na porta 3000");
})