const { User } = require('../models')
const { encrypt, decrypt } = require('../helpers/bcrypt')
const { tokenGenerator, tokenVerifier } = require('../helpers/jsonwebtoken')


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
            const { email, password } = req.body

            // check email
            const emailFound = await User.findOne({ where: { email } })

            const access_token = tokenGenerator({ id: emailFound.id, email: emailFound.email })


            // emailFound=true,check password
            if (emailFound) {
                const hashedPassword = emailFound.password
                const decryptpassword = await decrypt(password, hashedPassword)

                // password = true, generate token
                if (decryptpassword) {
                    res.status(200).json(access_token)
                } else {
                    res.status(404).json({ message: 'Wrong Password' })
                    console.log(decryptpassword)
                }
            } else {
                res.status(404).json({ message: 'Email not found' })
            }

        } catch (error) {
            res.status(500).json(error.message)
        }
    }




}

module.exports = UserController