const Router = require('express')
const BasketDeviceController = require('../controllers/basketDeviceController')
const checkAuthMiddleware = require('../middleware/authMiddleware')
const router = new Router

router.post('/:id',checkAuthMiddleware, BasketDeviceController.add)
router.get('/',checkAuthMiddleware, BasketDeviceController.getAll)
router.delete('/:id',checkAuthMiddleware, BasketDeviceController.deleteDevice)


module.exports = router