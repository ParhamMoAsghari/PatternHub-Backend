const express = require('express');
const router = express.Router();
const passport = require('../passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getUserByEmail, createUser } = require('../data/users'); // Implement these functions to interact with the database

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const saltRounds = 10; // Number of salt rounds (higher value means stronger salt, but slower hashing)
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = createUser({ name: name, email: email, password: hashedPassword, salt: salt });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

// Login user and generate JWT
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// Protected route
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Protected profile route', user: req.user });
  console.log(req)
});

module.exports = router;