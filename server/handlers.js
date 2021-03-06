const uniqid = require('uniqid')
const kontakstore = require('../services/kontak-store')

module.exports = {
    InsertContactV1: async function (req, res) {
        const id = uniqid()
        const kontak = await kontakstore.create({
            id: id,
            nama: req.body.nama,
            nomor: req.body.nomor,
        })

        res.json(kontak)
    },

    GetContactAllV1: async function (req, res) {
        const results = await kontakstore.find({})
        res.json(results)
    },

    GetContactV1: async function (req, res) {
        const kontak = await kontakstore.findOne({ id: req.params.id })
        if (kontak == null) res.status(404).json({ error: 'kontak tidak ditemukan' })

        res.json(kontak)
    },

    UpdateContactV1: async function (req, res) {
        const kontak = await kontakstore.findOne({ id: req.params.id })
        if (kontak == null) res.status(404).json({ error: 'kontak tidak ditemukan' })

        kontak.nama = req.body.nama
        kontak.nomor = req.body.nomor

        await kontak.save()

        res.json(kontak)
    },

    DeleteContactV1: async function (req, res) {
        const kontak = await kontakstore.findOne({ id: req.params.id })
        if (kontak == null) res.status(404).json({ error: 'kontak tidak ditemukan' })

        const newkontak = await kontak.remove()
        res.json(newkontak)
    },

}