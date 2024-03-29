const db = require("../database")

module.exports = {
    getAll : async (req, res )=>{
        try {
            const allUsers = await db.Users.findAll({})
            res.json(allUsers)
        } catch (error) {
            throw error
        }
    },
    add : async (req, res) => {
        try {
            const newUser = await db.Users.create(req.body)
            res.json(newUser)
        } catch (error) {
            throw error
        }
    },
    getOne : async (req, res) => {
        try {
            const oneUser = await db.Users.findOne({
                where: {
                    id: req.params.id
                }
        
            })
            res.json(oneUser)
            
        } catch (error) {
            throw error
            
        }
    },
    remove : async (req, res) => {
        try {
            const deletedUser = await db.Users.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(deletedUser)
        } catch (error) { 
            throw error
            
        }
    },
    update : async (req, res) => {
        try {
            const updatedUser = await db.Users.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.json(updatedUser)
            
        } catch (error) {
            throw error
        }

    }
}
