const {Schema} = require('mongoose')

const Set = new Schema({
    set: {type: String, required: true},
    quantity: {type: String, required: true},
    summary: {type: String, required: true},
    type: {type: String, required: true},
    colours: [{type: Array, required: true}],
    price: {type: Number, required: true},
    use: [{type: String, required: false}],
    care: [{type: String, required: false}],
    brand: {type: String, required: true},
    picture: {type: String, required: true}
})

module.exports = Set