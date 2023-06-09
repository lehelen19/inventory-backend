const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodItemSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    foodItems: [foodItemSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Category', categorySchema);
