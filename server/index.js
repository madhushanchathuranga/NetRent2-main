require('dotenv').config('./.env')

const express = require('express');
const cors = require('cors');
const connectDB = require('./connectDB.js');
const userRoutes = require('./routes/userRoutes.js');
const cookieParser = require('cookie-parser');

const app = express();

connectDB(); // Connect to MongoDB
console.log(process.env.MONGO_URI);


app.use(express.json()); // Add this to parse incoming JSON requests
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});


