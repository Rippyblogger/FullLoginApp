const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET } = process.env;

// Login
exports.getuser = async (req, res) => {
	User.find()
		.then((users) => {
			res.send(users);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		})
		.finally(console.log("Records retrieved successfully"));
};

// Signup
exports.signUp = async (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Empty content",
		});
	}

	// res.send({ message: "Successfully sent"});

	const user = new User({
		firstName: req.body.firstname,
		lastName: req.body.lastname,
		email: req.body.email,
		password: req.body.password,
	});

	// Save user in DB

	user
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({
					message: err.message,
				})
				.finally(console.log("Record inserted successfully"));
		});
};

// login

exports.login = async (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Empty content",
		});
	}

    User.findOne(
			{
				$and: [
					{ email: req.body.email.toLowerCase() },
					{ password: req.body.password },
				],
			},
			(err, result) => {
				if (err) {
					res.status(500).send(err);
					return;
				}

				if (!result) {
					data = {
						meta: {
							status: "fail",
							message: "Login Failure: Invalid username or password",
						},
					};
					res.status(401).send(data);
				} else {
					
					data = {
						meta: {
							status: "success",
							message: "Login success"
						},
					};

					const accessToken = jwt.sign(data, SECRET, { expiresIn: "20m" });

					res.json(accessToken);
				}
			}
		);
		
    
};
