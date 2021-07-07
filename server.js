// import packages
const express = require('express');
var cors = require("cors");
require('dotenv').config();
const { PORT } = process.env;
const app = express();
const connectDb = require('./db/index');
const myroute = require("./routes/userRoutes.js");

//Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static pages
app.use(express.static('views'));

// Connect to DB
connectDb();


// Require routes
// require('./routes/userRoutes.js')(app);

// alternative routes approach
app.use("/", myroute);

// Test get route
app.get('/', (req, res) => {
    res.write("Works");
    res.end()
})


// Start http server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
