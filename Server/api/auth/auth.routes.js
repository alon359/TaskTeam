const express = require('express')
const router = express.Router();

const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { login, signup, logout } = require('./auth.controller')

const { loginValidator } = require('./auth.validator');
const { userValidator } = require('../user/user.validator');


router.post('/login', loginValidator, login)
router.post('/signup', userValidator, signup)
router.get('/logout', requireAuth, logout)

module.exports = router
