const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretCode = process.env.SECRET_CODE || 'secret'

const tokenGenerator = (data) => {
    return jwt.sign(data, secretCode)
}

const tokenVerifier = (token) => {
    return jwt.verify(token, secretCode)
}

module.exports = {
    tokenGenerator,
    tokenVerifier
}