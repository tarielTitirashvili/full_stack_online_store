const ApiError = require('../error/error')

module.exports = function(err, req, res, next){
    if(err instanceof ApiError){
        return res.status(err.status).json({massage: err.massage})
    }
    return res.status(500).json({massage: "Unforeseen error!"})
}