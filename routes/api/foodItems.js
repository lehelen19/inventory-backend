const express = require('express');
const foodItemsController = require('../../controllers/api/foodItems');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.get('/', foodItemsController.index);

router.post('/', foodItemsController.create);

module.exports = router;
