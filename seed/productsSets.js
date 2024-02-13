const db = require('../db')
const {Set, Product} = require('../models')
const { set } = require('../models/products')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const main = async () => {
    const products = {
        product: "test",
        dimensions: "scam",
        picture: "wah"
    }
    await Product.insertMany(products)
    console.log('created products')
}

const run = async() => {
    await main()
    db.close()
}

run()