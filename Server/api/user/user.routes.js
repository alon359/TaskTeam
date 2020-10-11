const express = require('express');
const router = express.Router();

const { userValidator } = require('./user.validator');

// const { requireAuth, requireAdmin } = require('../../middlewares');
const { getUser, getUsers, deleteUser, updateUser } = require('./user.controller')

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/', userValidator, updateUser);
router.delete('/:id', deleteUser);

module.exports = router
