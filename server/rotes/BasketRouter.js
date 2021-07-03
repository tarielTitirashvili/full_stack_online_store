const Router = require('express')
const BasketController = require('../controllers/BasketController')
const checkAuthMiddleware = require('../middleware/authMiddleware')
const router = new Router

router.get('/',checkAuthMiddleware, BasketController.getAll)

module.exports = router