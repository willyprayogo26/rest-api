const { isLogin } = require('./authenticate')
const { isAuthorized } = require('./authorize')

module.exports = { isLogin, isAuthorized }