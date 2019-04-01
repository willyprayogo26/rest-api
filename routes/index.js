const router = require('express').Router()
const userRouter = require('./users')
const { userController } = require('../controllers')
const { isLogin } = require('../middlewares')

router.post('/registerAdmin', userController.registerAdmin)
router.post('/register', userController.register)
router.post('/login', userController.login)

router.use(isLogin)
router.use('/users', userRouter)

module.exports = router