const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Hello!')
})

const userRoute = require('./users')
route.use("/users", userRoute)

module.exports = route