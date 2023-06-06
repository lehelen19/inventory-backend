const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  quantity: Number,
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
