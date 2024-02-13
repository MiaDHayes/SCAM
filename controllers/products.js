const {Product} = require('../models')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log(products)
    res.json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllProducts
}