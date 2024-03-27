class UserController {
    static async getUsers(req, res) {
        res.send('Users page')
    }

    static async register(req, res) {
        try {
            
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