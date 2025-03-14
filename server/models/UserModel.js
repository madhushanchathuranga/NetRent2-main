const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['ADMIN', 'AGENT', 'CUSTOMER'],
        default: 'CUSTOMER'
    },

}, { timestamps: true });

module.exports = mongoose.model(
    "UserModel", //file name
    userScema //function name
)