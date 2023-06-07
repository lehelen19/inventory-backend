const axios = require('axios');
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

    // Make API request to retrieve nutrition data
    const URL = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
    const apiResponse = await axios({
      method: 'post',
      url: URL,
      headers: {
        'x-app-id': process.env.APP_ID,
        'x-app-key': process.env.API_KEY,
      },
      data: {
        query: foodItemDetails.name,
      },
    });

    if (apiResponse.status === 200) {
      const fullDetails = {
        ...foodItemDetails.toObject(),
        ...apiResponse.data.foods[0],
      };
      res.json(fullDetails);
      return;
    }
    res.json(foodItemDetails);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const category = await Category.findOne({ 'foodItems._id': req.params.id });
    const item = category.foodItems.find(
      (itemObj) => itemObj._id === req.params.id
    );
    console.log(item);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteItem(req, res) {
  try {
    const category = await Category.findOne({ 'foodItems._id': req.params.id });
    category.foodItems.remove(req.params.id);
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  show,
  update,
  delete: deleteItem,
};
