const express = require('express');
const router = express.Router();

// Controller functions
const { getUser, getUsers, deleteUser, updateUser } = require('./user.controller')

// Middleware
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware');
// Validities
const { userValidator } = require('../../middlewares/validities/user.validator');

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/', userValidator, updateUser);
router.delete('/:id', deleteUser);

module.exports = router
