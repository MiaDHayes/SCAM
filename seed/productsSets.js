const db = require('../db')
const {Set, Product} = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const main = async () => {
}

const run = async() => {
    await main()
    db.close()
}

run()