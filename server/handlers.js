const uniqid = require('uniqid')
const kontakstore = require('../services/kontak-store')

module.exports = {
    InsertContactV1: async function (req, res) {
        const id = uniqid()
        const kontak = await kontakstore.create({
            id: id,
            name: req.body.name,
            nomor: req.body.telepon,
        })

        res.json(kontak)
    },

    GetContactAllV1: async function (req, res) {
        const results = await kontakstore.find({})
        res.json(results)
    },

    GetContactV1: async function (req, res) {
        const result = await kontakstore.findOne({ id: req.params.id })
        res.json(result)
    },

    UpdateContactV1: async function (req, res) {
        const kontak = await kontakstore.findOne({ id: req.params.id })
        const newkontak = await kontak.update({
            name: req.body.name,
            nomor: req.body.telepon,
        })

        res.json(newkontak)
    },

    DeleteContactV1: async function (req, res) {
        const kontak = await kontakstore.findOne({ id: req.params.id })
        const newkontak = await kontak.remove()

        res.json(newkontak)
    },

}