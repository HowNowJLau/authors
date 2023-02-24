const mongoose = require('mongoose');

const AuthorScehma = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"]
    }
}, {timestamps: true});

const Author = mongoose.model("Model", AuthorScehma);

module.exports = Author;