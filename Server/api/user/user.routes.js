const express = require('express');
const router = express.Router();
// Controller functions
const { getUser, getUsers, deleteUser, updateUser, updatePass } = require('./user.controller')
// Middleware
const { requireAuth } = require('../../middlewares/requireAuth.middleware');
// Validities
const { userValidator, userIDValidator, passwordValidator } = require('../../middlewares/validities/user.validator');

router.get('/', requireAuth, getUsers);
router.get('/:id', userIDValidator, getUser);
router.put('/', requireAuth, userValidator, updateUser);
router.patch('/updatePass', requireAuth, passwordValidator, updatePass)
router.delete('/:id', requireAuth, deleteUser);

module.exports = router
