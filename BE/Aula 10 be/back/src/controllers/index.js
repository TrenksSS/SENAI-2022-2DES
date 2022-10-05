const Item = require('../models/index')
const con = require('../models/solicitacaoDAO')

const criaItem = (req, res) => {
    con.query(Item.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end()
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end()
            else
                res.status(500).json(err).end()
    })
}

const listarView = (req, res) => {
    con.query(Item.listarView(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end()
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end()
            else
                res.status(500).json(err).end()
    })
}

module.exports = {
    criaItem,
    listarView
}