const Category = require('../../models/Category');

async function index(req, res) {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  index,
  create,
};
