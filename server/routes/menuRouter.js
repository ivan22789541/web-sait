const Router = require('express')
const router = new Router()
const menuController = require('../controllers/menuController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), menuController.create)
router.get('/', menuController.getAll)
router.get('/:id', menuController.getOne)


module.exports = router