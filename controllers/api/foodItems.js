const FoodItem = require('../../models/FoodItem');

async function index(req, res) {
  try {
    const foodItems = await FoodItem.find({});
    res.json(foodItems);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  index,
};
