const { Set, Product } = require('../models')

const getAllSets = async (req, res) => {
  try {
    const set = await Set.find({})
    res.json(set)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSetDetails = async (req, res) => {
  try {
    const { name } = req.params
    const regex = new RegExp(name, 'i') // flags for case-insensitive
    const set = await Set.findOne({ set: {$regex: regex} })

    if (!set) {
      return res.status(404).json({ message: 'Sets not found' })
    }
    // attaches reviews and actors to the result when displayed
    const products = await Product.find({ set1: set._id })

    const setDetails = {
      set,
      products
    }

    res.json(setDetails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllSets,
  getSetDetails
}