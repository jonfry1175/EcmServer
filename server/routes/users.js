const userRoute = require('express').Router()
const {UserController} = require('../controllers')


userRoute.get('/', UserController.getUsers)
userRoute.post('/register', UserController.register)

module.exports = userRoute