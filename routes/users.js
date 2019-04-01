const router = require('express').Router()
const { userController } = require('../controllers')
const { isAuthorized } = require('../middlewares')

router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUser)

router.use(isAuthorized)
router.get('/', userController.getAllUser)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)

module.exports = router