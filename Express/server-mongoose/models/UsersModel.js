const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique:true
    },
    Password: {
        type: String,
        required: true,
        // unique:true
    },
Address: {
        type:String
    },
})

const Users = mongoose.model("Users", UsersSchema)

module.exports = Users;