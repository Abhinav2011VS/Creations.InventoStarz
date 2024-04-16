const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (your frontend files)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy user database
const users = [];

// Route for user sign up
app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if username is already taken
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store user in database
        users.push({ username, password: hashedPassword });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for user login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user in database
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check password
        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
