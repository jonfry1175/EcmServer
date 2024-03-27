const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = +process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const route = require('./routes')
app.use(route)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})