const express = require('express')
const cors = require('cors')

const itens =  require('./src/routes/index.js')

const app = express()
app.use(express.json())
app.use(cors())
app.use(itens)

app.listen(4000, ()=>{
    console.log("Respondendo na porta 4000")
})