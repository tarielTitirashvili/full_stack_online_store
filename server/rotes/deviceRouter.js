const Router = require('express')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const deviceController = require('../controllers/deviceController')
const router = new Router

router.post('/', checkRoleMiddleware("ADMIN"), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.delete('/:id',checkRoleMiddleware("ADMIN"), deviceController.deleteDevice)

module.exports = router