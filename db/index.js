const mongoose = require('mongoose')

const pw = config.pw

mongoose
    .connect(`mongodb+srv://${pw}@scam.gyowh0t.mongodb.net/scam?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db