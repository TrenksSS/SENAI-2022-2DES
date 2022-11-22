const express = require('express');
const cors = require('cors');

const coisas = require('./src/routes/index');

const app = express();
app.use(express.json());
app.use(cors());
app.use(coisas);

app.listen(4359, () => {
    console.log("Respondendo na porta 4359");
});