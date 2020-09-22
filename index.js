const mongoose = require('mongoose')
const server = require('./server/server')

async function main() {
    console.log('connecting to database...')
    mongoose.set('useUnifiedTopology', true)
    await mongoose.connect('mongodb://localhost/kontak', { useNewUrlParser: true })
    console.log('success connecting to database')

    server.listen(3000)
    console.log('server listening on port :3000')
}

main()