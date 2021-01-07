var { validationResult } = require('express-validator');
// Services
const logger = require('../../services/logger.service')
const memberService = require('./member.service');
const userService = require('../user/user.service');

// Get members
async function getMembers(req, res) {
    try {
        const { query } = req;
        const members = await memberService.query(query);
        res.status(200).json(members);
    } catch (error) {
        logger.error('Get members filed\n', error);
        res.status(500).json({ error: 'Get members failed' })
    }
}

// Get member by id
async function getMember(req, res) {
    try {
        const { id } = req.params;
        const member = await memberService.getByID(id);

        res.status(200).json(member);
    } catch (error) {
        logger.error('Member.controller - Get member filed\n', error);
        res.status(500).json({ error: 'Get member failed' })
    }
}

// Create new member
async function createMember(req, res) {
    try {
        const errors = validationResult(req).errors;
        if (errors.length !== 0) {
            logger.debug('member.controller: createMember - errors:\n\t' + JSON.stringify(errors))
            return res.status(409).json(errors);
        }

        const member = req.body;

        const newMember = await memberService.create(member);

        res.status(200).json(newMember);
    } catch (error) {
        logger.error('Member.controller - Create new member failed.\n' + error);
        res.status(500).json({ error: 'Create new member failed.' });
    }
}

async function updateMember(req, res) {
    try {
        const errors = validationResult(req).errors;
        if (errors.length !== 0) {
            logger.debug('member.controller: updateMember - errors:\n\t' + JSON.stringify(errors))
            return res.status(409).json(errors);
        }

        const member = req.body;

        if (!('_id' in member)) {
            const error = {
                location: 'body',
                param: '_id',
                msg: '"_id" is required',
            }
            errors.push(error)

            logger.debug('member.controller: updateMember - errors:\n\t' + JSON.stringify(errors))
            return res.status(409).json(errors);
        }


        const updateMember = await memberService.update(member);

        res.status(200).json(updateMember);
    } catch (error) {
        logger.error('Member.controller - Update member failed.\n' + error);
        res.status(500).json({ error: 'Update member failed.' });
    }
}

async function removeMember(req, res) {
    try {
        const { id } = req.params;

        await memberService.remove(id);

        res.status(200).json({ massage: 'Remove member successfully.' });
    } catch (error) {
        logger.error('Member.controller - Remove member failed.\n' + error);
        res.status(500).json({ error: 'Remove member failed.' });
    }
}

module.exports = {
    getMembers,
    getMember,
    createMember,
    updateMember,
    removeMember
}
