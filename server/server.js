const express = require('express')
const bodyParser = require('body-parser')
const handlers = require('./handlers')

const app = express()

// register middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// register routes
app.post('/kontaks', handlers.InsertContactV1)
app.get('/kontaks', handlers.GetContactAllV1)
app.get('/kontaks/:id', handlers.GetContactV1)
app.put('/kontaks/:id', handlers.UpdateContactV1)
app.delete('/kontaks/:id', handlers.DeleteContactV1)

module.exports = app