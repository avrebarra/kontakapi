const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./handlers')

const app = express()

// register middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// register routes
app.post('/kontak', handlers.InsertContactV1)
app.get('/kontak', handlers.GetContactV1)
app.put('/kontak', handlers.UpdateContactV1)
app.delete('/kontak', handlers.DeleteContactV1)

module.export = app