// mongodb+srv://admin:admin123@cluster0.ocncl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const routes = require('./routes/Routes.js');



const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js');
const PORT = 3000;
const app = express();

connectDB();

// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send('API is running...');
});

app.post('/', (req, res) => {
    console.log(req.body); // Logs the incoming data to the console
    res.json({ message: 'Data received!', data: req.body });
});

//login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

//register
app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})


app.listen(PORT, () => {
    console.log("your server is running on port ${PORT}");
});



