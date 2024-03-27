const {hash, compare} = require ('bcrypt')
require('dotenv').config()
const saltRounds = +process.env.SALT_ROUNDS

const encrypt = async (data) => {
    const result = await hash(data, saltRounds)
    return result
}

const decrypt = async (data, hashedData) => {
    const result = await compare(data, hashedData)
    return result
}

module.exports = {
    encrypt,
    decrypt
}