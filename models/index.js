const mongoose = require('mongoose')
const ProductSchema = require('./products')
const SetSchema = require('./sets')

const Product = mongoose.model('Product', ProductSchema)
const Set = mongoose.model('Set', SetSchema)

module.exports = {
    Product,
    Set
}