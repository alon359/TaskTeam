const express = require('express');
const router = express.Router();
// Controller functions
const { getUser, getUsers, deleteUser, updateUser, updatePass } = require('./user.controller')
// Middleware
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
// Validities
const { userValidator, userIDValidator, passwordValidator } = require('../../middlewares/validities/user.validator');

router.get('/', getUsers);
router.get('/:id', userIDValidator, getUser);
router.put('/', userValidator, updateUser);
router.patch('/updatePass', requireAuth, passwordValidator, updatePass)
router.delete('/:id', deleteUser);

module.exports = router
