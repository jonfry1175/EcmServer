const userRoute = require('express').Router()
const { UserController } = require('../controllers')


userRoute.get('/', UserController.getUsers)
userRoute.post('/register', UserController.register)
userRoute.post('/login', UserController.login)

module.exports = userRoute