const express = require('express');
const router = express.Router();
// Controller
const { createMember, getMembers, getMember, updateMember, removeMember } = require('./member.controller');
// validators
const { memberValidator, createMemberValidation } = require('../../middlewares/validities/member.validator');
// Middlewares
const { requireAuth, requireProjectMembership } = require('../../middlewares/requireAuth.middleware');



router.get('/', requireAuth, getMembers);
router.get('/:id', requireAuth, getMember);
router.post('/', requireAuth, createMemberValidation, createMember);
router.put('/', requireAuth, memberValidator, updateMember);
router.delete('/:id', requireAuth, requireProjectMembership, removeMember);

module.exports = router;
