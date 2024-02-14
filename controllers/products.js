const {Product} = require('../models')

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
        product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

////////////////////////////////////////////////////////////
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.json(products)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

////////////////////////////////////////////////////////////
const updateProduct = async (req, res) => {
  try {
    let { id } = req.params
    let product = await Product.findByIdAndUpdate(id, req.body, { new: true})
    if (product) {
      return res.status(200).json(product)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

///////////////////////////////////////////////////////////
const deleteProduct = async (req, res) => {
  try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id)
      if (product) {
          return res.status(200).send("Ingredient product")
      }
      throw new Error("product not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
}