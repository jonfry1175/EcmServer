const userRoute = require('express').Router()
const { UserController } = require('../controllers')
const authentication = require('../middlewares/auth')


userRoute.get('/', 
authentication, 
UserController.getUsers)

userRoute.post('/register', UserController.register)
userRoute.post('/login', UserController.login)

module.exports = userRoute