const FoodItem = require('../../models/FoodItem');

async function index(req, res) {
  try {
    const foodItems = await FoodItem.find({});
    res.json(foodItems);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const foodItem = await FoodItem.create(req.body);
    res.json(foodItem);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  index,
  create,
};
