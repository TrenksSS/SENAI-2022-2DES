const express = require('express');
const router = express.Router();
const Prod = require("../controllers/sControllers");

router.post("/solicitacoes/produto", Prod.cadProd);
router.get("/solicitacoes/produto", Prod.listarProd);
router.post("/solicitacoes/departamento", Prod.criaDep);
router.delete("/solicitacoes/itens/:Cod_Depto", Prod.excluirDep);
 
module.exports = router;