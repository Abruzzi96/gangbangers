// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    port: '3306',
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'gangbangers'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL Database');
});

// Registration Endpoint
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const sql = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
    db.query(sql, [email, username, hashedPassword], (err, result) => {
        if (err) {
            console.error('Registration error:', err);
            return res.status(500).json({ message: 'Registration failed' });
        }
        console.log('User registered successfully');
        res.status(200).json({ message: 'User registered successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
