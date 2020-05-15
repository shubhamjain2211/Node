const express = require('express');
const router = express.Router();
const passport = require('passport');
const { signUp, login, logout } = require('../services/user');

// Load User model
const User = require('../models/User');
const { passAuthenticated } = require('../auth/checkAuthetication');

// Login Page
router.get('/login', (req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', signUp);

// Login
router.post('/login', login);

// Logout
router.get('/logout', logout);


module.exports = router;