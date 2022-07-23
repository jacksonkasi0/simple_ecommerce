const mongoose = require("mongoose");
const {isEmail} = require('validator')

const userSchema =  mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
	},
	password: {
		type: String,
		required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
	},
	loginType: {
		type: Number, 
		required: true,
	},
	verified: {
		type: Boolean,
		default: false,
	}
},{timestamps:true});

const User =  mongoose.model("users", userSchema);

module.exports = User;
