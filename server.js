const express = require('express')
const mongoose = require('mongoose')
const setController = require('./controllers/sets')
const productController = require('./controllers/products')

const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Create
app.post('/sets', setController.createSet)
app.post('/product', productController.createProduct)

// // Read
app.get('/products', productController.getAllProducts)
app.get('/sets', setController.getAllSets)
// app.get('/sets/name/:name', setController.getSetDetails)
app.get('/sets/:brand', setController.getBrandName)

// // Update
app.put('/products/:id', productController.updateProduct)
app.put('/sets/:id', setController.updateSet)

// // Delete
app.delete('/products/:id', productController.deleteProduct)
app.delete('/sets/:id', setController.deleteSet)
