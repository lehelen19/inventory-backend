const express = require('express');
const foodItemsController = require('../../controllers/api/foodItems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.post(
  '/categories/:id/items',
  ensureLoggedIn,
  foodItemsController.create
);

router.get('/items/:id', foodItemsController.show);

router.put('/items/:id', ensureLoggedIn, foodItemsController.update);

router.delete('/items/:id', ensureLoggedIn, foodItemsController.delete);

module.exports = router;
