const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000
// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/experiziteDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));``

// Serve static files
app.use(express.static('public'));


// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email, password }, (err, foundUser) => {
        if (foundUser) {
            res.send(`<h1>Hello, ${foundUser.username}</h1>`);
        } else {
            res.send('Invalid login credentials');
        }
    });
});

// Register Route
app.post('/register', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    });
    newUser.save((err) => {
        if (!err) {
            res.send('User registered successfully');
        } else {
            res.send('Error registering user');
        }
    });
});

app.listen(port, () => {
    console.log('Server started on port 3000');
});