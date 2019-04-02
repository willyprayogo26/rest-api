const User = require('../models/user')

module.exports = {
    isAuthorizedAdmin: (req, res, next) => {
        try {
            if (req.user.role === 'admin') {
                next()
            } else {
                res.status(401).json({
                    message: 'Unauthorized'
                })
            }
        } catch (err) {
            res.status(400).json({
                msg: 'Bad request'
            })
        }
    },

    isAuthorizedUser: (req, res, next) => {
        try {
            if(req.user.id.toString() === req.params.id || req.user.role === 'admin') {
                next()
            } else {
                res.status(401).json({
                    message: 'Unauthorized'
                })
            }
        } catch (err) {
            res.status(400).json({
                msg: 'Bad request'
            })
        }
    }
}