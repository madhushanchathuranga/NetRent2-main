// mongodb+srv://admin:admin123@cluster0.ocncl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express')
const connectDB = require('./db.js')

const app = express();

connectDB();

// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.post('/', (req, res) => {
    console.log(req.body); // Logs the incoming data to the console
    res.json({ message: 'Data received!', data: req.body });
});


app.listen(3000, () => {
    console.log("app is running");
});
