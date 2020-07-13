const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares');
const { getUser, getUsers, deleteUser, updateUser } = require('./user.controller')
const router = express.Router()

// router.use(requireAuth)

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
