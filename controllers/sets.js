const {Set} = require('../models')

const getAllSets = async (req, res) => {
  try {
    const set = await Set.find({});
    res.json(set);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllSets
}