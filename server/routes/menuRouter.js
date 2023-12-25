const Router = require('express')
const router = new Router()
const menuController = require('../controllers/menuController')


router.post('/',)
router.get('/', menuController.getAll)
router.get('/:id', menuController.getOne)


module.exports = router