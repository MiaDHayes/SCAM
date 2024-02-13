const db = require('../db')
const {Set, Product} = require('../models')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const main = async () => {
    const set1 = {}
    set1.save()

    const products = []
    await Product.insertMany(products)
    console.log('created products')
}

const run = async() => {
    await main()
    db.close()
}

run()