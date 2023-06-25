const express = require('express');
const router = express.Router();
const passport = require('../passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {getUserByEmail, createUser } = require('../data/users');
require('dotenv').config();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'این ایمیل تکراری است !' });
    }
    const saltRounds = parseInt(process.env.SALT_ROUNDS); // Number of salt rounds (higher value means stronger salt, but slower hashing)
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = createUser({ name: name, email: email, password: hashedPassword, salt: salt });

    res.status(201).json({ message: 'با موفقیت ثبت نام شدید!', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'خطا در ثبت نام', error: error.message });
  }
});

// Login user and generate JWT
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'ایمیل یا رمز نامعتبر!' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'ایمیل یا رمز نامعتبر!' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'با موفقیت وارد شدید!', token });
  } catch (error) {
    res.status(500).json({ message: 'خطا در ورود!', error: error.message });
  }
});

// Protected route
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Protected profile route', user: req.user });
  console.log(req)
});

module.exports = router;