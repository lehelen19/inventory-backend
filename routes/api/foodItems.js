const express = require('express');
const foodItemsController = require('../../controllers/api/foodItems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.post('/categories/:id/items', foodItemsController.create);

module.exports = router;
