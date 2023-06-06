const express = require('express');
const foodItemsController = require('../../controllers/api/foodItems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.post('/categories/:id/items', foodItemsController.create);

router.get('/items/:id', foodItemsController.show);

module.exports = router;
