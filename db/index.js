const mongoose = require('mongoose')
const config = require('../config')

mongoose
    .connect(config)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })
mongoose.set('debug', true)
const db = mongoose.connection
module.exports = db