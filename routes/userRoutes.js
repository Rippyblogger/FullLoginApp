const express = require("express");
const auth = require('../middleware/auth')
const router = express.Router();
const authy = require('../middleware/auth')

/* module.exports = (app) => {
	const userController = require("../controller/UserController");

    app.get("/api/getuser", userController.getuser);

    app.post("/api/signup", userController.signUp);
    
    app.post("/api/login", userController.login);
}; */


const userController = require("../controller/UserController");

router.get("/api/getuser", userController.getuser);

router.post("/api/signup", userController.signUp);

router.post("/api/login", userController.login);

module.exports = router