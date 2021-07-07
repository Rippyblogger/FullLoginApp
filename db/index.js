const mongoose = require('mongoose');
require("dotenv").config();
const { DB_URL } = process.env;

const connectDb = async () => {
    try {
        mongoose.connect(DB_URL, {
					useNewUrlParser: true,
					useUnifiedTopology: true,
				});
        
        console.log(`DB connection successful`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;