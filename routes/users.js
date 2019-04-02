const router = require('express').Router()
const { userController } = require('../controllers')
const { isAuthorizedAdmin, isAuthorizedUser } = require('../middlewares')

router.get('/:id', isAuthorizedUser, userController.getUserById)
router.put('/:id', isAuthorizedUser, userController.updateUser)

router.use(isAuthorizedAdmin)
router.get('/', userController.getAllUser)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)

module.exports = router