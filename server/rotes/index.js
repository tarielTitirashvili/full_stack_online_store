const Router = require('express')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const basket = require('./BasketRouter')
const BasketDevice = require('./basketDeviceRouter')

const router = new Router

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/basket', basket)
router.use('/basketDevice', BasketDevice)

module.exports = router