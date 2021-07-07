const mongoose = require("mongoose");

const userModel = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			lowercase: true,
		},
		lastName: {
			type: String,
			required: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userModel);
