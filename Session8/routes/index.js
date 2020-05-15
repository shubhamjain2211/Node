const express = require('express');
const router = express.Router();
const passport = require('passport');

const { isAuthenticated, passAuthenticated } = require('../auth/checkAuthetication');

// Welcome Page
router.get('/', passAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', isAuthenticated, (req, res) =>
    res.render('dashboard', {
        user: req.user
    })
);

router.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/users/login' }),
    function (req, res) {
        res.render('dashboard',{
            user : req.user
        });
});

module.exports = router;