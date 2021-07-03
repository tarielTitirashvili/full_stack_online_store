const jwt = require('jsonwebtoken')
const {Basket, BasketDevice} = require('../models/models')

class BasketController {
    async add(req, res){
        const{id} = req.params
        const userToken = req.headers.authorization.split(' ')[1]
        const decodedUserInfo = jwt.verify(userToken, process.env.SECRET_KEY)
        const newBasketDevice = await BasketDevice.create({deviceId: id, basketId: decodedUserInfo.id})
        res.json(newBasketDevice)
    }
    async getAll(req, res){
        const{id} = req.body
        const basket = await Basket.findAll({where:{id}})
        return res.json(basket)
    } 
    async deleteDevice(req, res){
        const{id} = req.body
        const basketDevice = await BasketDevice.findOne({id})
        await basketDevice.destroy()
        return res.json(basketDevice)
    } 
}

module.exports = new BasketController()