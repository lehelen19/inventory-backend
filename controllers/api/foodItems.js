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

module.exports = {
  create,
};
