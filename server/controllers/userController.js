const ApiError = require("../error/error")
const bcrypt = require('bcrypt')
const {User,Basket} = require('../models/models')
const jwt = require('jsonwebtoken')

function generateToken (id, email, role){
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn:"24h"}
    )
}

class UserController {
    async registration(req, res, next){
        const{email, password, role} = req.body

        if(!email || !password)return next(ApiError.badRequest("incorrect email or password"))

        const candidate = await User.findOne({where:{email}})
        if(candidate)return next(ApiError.badRequest("this email already used"))

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        console.log(user.id)
        const basket = await Basket.create({userId: user.id})
        const token = generateToken(user.id, user.email, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const{email, password} = req.body

        const user = await User.findOne({where:{email}})
        if(!user)return next(ApiError.internal("user with this email not found"))

        const comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword)return next(ApiError.internal("incorrect password"))

        const token = generateToken(user.id, user.email, user.role)
        return res.json({token})
    } 
    async auth(req, res, next){
        const token = generateToken(req.user.id, req.user.email, req.user.role)
        res.json({token})
    }
}

module.exports = new UserController()
