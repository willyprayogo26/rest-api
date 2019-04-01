module.exports = {
    isAuthorized: (req, res, next) => {
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
    }
}