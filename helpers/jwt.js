const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    jwtSign: (payload) => {
        return jwt.sign(payload, JWT_SECRET)
    },
    jwtVerify: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET)
        }
        catch (error) {
            return null
        }
    }
}