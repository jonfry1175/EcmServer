const { User } = require('../models')
const {encrypt} = require('../helpers/bcrypt')


class UserController {
    static async getUsers(req, res) {
        try {
            const result = await User.findAll()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async register(req, res) {
        try {
            const { email, password } = req.body
            const hashedPassword = await encrypt(password)
            const result = await User.create({ email, password: hashedPassword })
            
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async login(req, res) {
        try {

        } catch (error) {
            res.status(500).json(error.message)
        }
    }


}

module.exports = UserController