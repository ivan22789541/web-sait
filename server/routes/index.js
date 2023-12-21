const Router = require('express')
const router = new Router()
const menuRouter = require('./menuRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/menu', menuRouter)


module.exports = router