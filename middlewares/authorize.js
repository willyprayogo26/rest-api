module.exports = {
    isAuthorized: (req, res, next) => {
        try {
            if (req.user.role === 'admin') {
                next()
            } else {
                throw new Error(`Bad request`)
            }
        } catch (err) {
            res.status(400).json({
                msg: 'Bad request'
            })
        }
    }
}