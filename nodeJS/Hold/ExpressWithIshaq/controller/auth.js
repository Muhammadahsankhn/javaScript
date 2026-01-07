const { createUser } = require('../models/user')

exports.createUser = async(email, password) => {
    try {
        const userID = Date.now()
        await createUser(email, password)
    } catch (err) {
        throw err
    }
}