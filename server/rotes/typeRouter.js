const Router = require('express')
const TypeController = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = new Router

router.post('/',checkRoleMiddleware("ADMIN"), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router