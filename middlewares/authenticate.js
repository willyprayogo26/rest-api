const { jwt } = require('../helpers')
const { User } = require('../models')

module.exports = {
    isLogin: (req, res, next) => {
        let payload = jwt.jwtVerify(req.headers.token)

        if (payload) {
            User.findByPk(payload.id)
                .then(user => {
                    if (user) {
                        req.user = {
                            id: user._id,
                            email: user.email,
                            role: user.role,
                            token: req.headers.token,
                        }
                        next()
                    } else {
                        res.status(401).json({
                            msg: 'Unauthorized'
                        })
                    }
                })
                .catch(err => {
                    res.send(500).json(err)
                })
        } else {
            res.send(401).json({
                msg: 'Please provide a valid token'
            })
        }
    }
}