const express = require('express');
const router = express.Router();
// Controller
const { createMember, getMembers, getMember, updateMember, removeMember } = require('./member.controller');
// validators
const { memberValidator, createMemberValidation } = require('../../middlewares/validities/member.validator');
// Middlewares
const { requireAuth, requireProjectMembership, requireAdminProject } = require('../../middlewares/requireAuth.middleware');

router.get('/', requireAuth, requireProjectMembership, getMembers);
router.get('/:memberID', requireAuth, requireProjectMembership, getMember);
router.post('/', requireAuth, requireProjectMembership, requireAdminProject, createMemberValidation, createMember);
router.put('/', requireAuth, requireProjectMembership, requireAdminProject, memberValidator, updateMember);
router.delete('/:memberID', requireAuth, requireProjectMembership, requireAdminProject, removeMember);

module.exports = router;
