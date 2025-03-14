const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScema = new Schema({


});

module.exports = mongoose.model(
    "UserModel", //file name
    userScema //function name
)