const express = require('express');
const router = express.Router();
// Controller
const { createMember, getMembers, getMember, updateMember, removeMember } = require('./member.controller');
// validators
const { memberValidator, createMemberValidation } = require('../../middlewares/validities/member.validator');

router.get('/', getMembers);
router.get('/:id', getMember);
router.post('/', createMemberValidation, createMember);
router.put('/', memberValidator, updateMember);
router.delete('/:id', removeMember);

module.exports = router;
