const { tokenVerifier } = require('../helpers/jsonwebtoken')

const authentication = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        if (!access_token) {
            return res.status(401).json({ message: 'please login' })
        }

        const verifyToken = await tokenVerifier(access_token)
        if (!verifyToken) {
            return res.status(401).json({ message: 'invalid token' })
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({ message: 'invalid token' })
    }
}

module.exports = authentication
