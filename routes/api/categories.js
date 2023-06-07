const express = require('express');
const categoriesController = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

router.get('/', categoriesController.index);

router.get('/:id', categoriesController.show);

router.post('/', ensureLoggedIn, categoriesController.create);

router.delete('/:id', ensureLoggedIn, categoriesController.delete);

router.put('/:id', ensureLoggedIn, categoriesController.update);

module.exports = router;
