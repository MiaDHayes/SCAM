const { Set, Product } = require('../models')

const createSet = async (req, res) => {
  try {
    const set = await new Set(req.body)
    await set.save()
    return res.status(201).json({
        set
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

////////////////////////////////////////////////////////////
  const updateSet = async (req, res) => {
    try {
      let { id } = req.params
      let set = await Set.findByIdAndUpdate(id, req.body, { new: true})
      if (set) {
        return res.status(200).json(set)
      }
    } catch (e) {
      return res.status(500).json({ error: error.message})
    }
  }

  /////////////////////////////////////////////////////////
const getAllSets = async (req, res) => {
  try {
    const set = await Set.find({})
    res.json(set)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// const getSetDetails = async (req, res) => {
//   try {
//     const { name } = req.params
//     const regex = new RegExp(name, 'i')
//     const set = await Set.findOne({ set: {$regex: regex} })
    
//     if (!set) {
//       return res.status(404).json({ message: 'Sets not found' })
//     }
    
//     const products = await Product.find({ set: set._id })
    
//     const setDetails = {
//       set,
//       products
//     }

//     res.json(setDetails)
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const getBrandName = async (req, res) => {
  try {
    const { brand } = req.params
    const regex = new RegExp(brand, 'i')
    const set = await Set.find({ brand: {$regex: regex} })
    
    if (!set) {
      return res.status(404).json({ message: 'Sets not found' })
    }
    const setByBrand = {
      set
    }
    
    res.json(setByBrand)
    
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

/////////////////////////////////////////////////////////////
const deleteSet = async (req, res) => {
  try {
      const { id } = req.params;
      const set = await Set.findByIdAndDelete(id)
      if (set) {
          return res.status(200).send("Ingredient set");
      }
      throw new Error("Set not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllSets,
  // getSetDetails,
  createSet,
  updateSet,
  deleteSet,
  getBrandName
}