const express = require('express')
const router = express.Router();

// Controller functions
const { login, signup, logout } = require('./auth.controller')

// Middleware
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
// Validities
const { loginValidator, signUpValid } = require('../../middlewares/validities/authentication.validator');


router.post('/login', loginValidator, login)
router.post('/signup', signUpValid, signup)
router.get('/logout', requireAuth, logout)

module.exports = router
