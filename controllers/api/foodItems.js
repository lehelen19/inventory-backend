const Category = require('../../models/Category');

async function create(req, res) {
  try {
    const category = await Category.findById(req.params.id);
    category.foodItems.push(req.body);
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  try {
    const category = await Category.findOne({ 'foodItems._id': req.params.id });
    const foodItemDetails = category.foodItems.find(
      (item) => item._id.toString() === req.params.id
    );
    res.json(foodItemDetails);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  show,
};
