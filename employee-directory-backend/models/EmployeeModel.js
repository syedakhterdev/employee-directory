const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {
	'firstName' : String,
	'lastName' : String,
	'title' : String,
	'designation' : String,
	'address' : String,
	'gender' : String,
	'dob' : Date,
	'profilePicture' : String,
	'phone' : String,
	'email' : String,
	'department' : String
}

let EmployeeSchema = new Schema(fields, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
