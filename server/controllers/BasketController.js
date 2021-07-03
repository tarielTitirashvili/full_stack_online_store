const {Basket} = require('../models/models')

class BasketController {
    async create(req, res){
        // find this method in userController register
    }
    async getAll(req, res){
        const{id} = req.body
        const basket = await Basket.findAll({where:{id}})
        return res.json(basket)
    } 
}

module.exports = new BasketController()