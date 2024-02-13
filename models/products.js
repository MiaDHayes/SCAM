const {Schema} = require('mongoose')

const Product = new Schema({
    product: {type: String, required: true},
    dimensions: {type: String, required: true},
    set: {type: Schema.Types.ObjectId, ref: 'Set'},
    picture: {type: String, required: true}
})

module.exports = Product