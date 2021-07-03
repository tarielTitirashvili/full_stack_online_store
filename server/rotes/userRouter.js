const Router = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router

router.post('/register', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.auth)


module.exports = router