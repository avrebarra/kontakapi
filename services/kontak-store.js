const mongoose = require('mongoose')

const KontakSchema = new mongoose.Schema({
    name: String,
    nomor: Number,
})

module.exports = mongoose.model('kontak', KontakSchema)