const express = require('express')
const router = express.Router()

const Item = require("../controllers/index.js")

router.get("/listar",Item.listarView)
router.post("/cadastrar",Item.criaItem)

module.exports = router;