const express = require('express');
const categoriesController = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.get('/', categoriesController.create);

router.post('/', categoriesController.create);

module.exports = router;
