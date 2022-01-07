const router = require('express').Router();

const menuController = require('../controllers/menu');

router.get('/', menuController.getMenu);

router.post('/', menuController.postMenu);

router.patch('/:mid', menuController.updateMenu);

module.exports = router;
