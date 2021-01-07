const mongoose = require('mongoose');
// Services
const logger = require('../../services/logger.service')
// Models
const Member = require('../../models/member.model');


module.exports = {
    query,
    getByID,
    create,
    update,
    remove,
    removeByProjectID,
    isMemberAlreadyExists
}

async function query(filter = {}) {
    try {
        const members = await Member.find(filter)
            .populate('userID')
            .populate('projectID');
        return members;
    } catch (error) {
        logger.error('memberService - Get members failed.')
        throw error;
    }
}

async function getByID(memberID) {
    try {
        const member = await Member.findById(memberID);

        return member;
    } catch (error) {
        logger.error('memberService - Get member failed.')
        throw error;
    }
}

async function create(member) {
    try {
        member._id = new mongoose.Types.ObjectId();

        const memberSchema = new Member(member);
        let newMember = await memberSchema.save()

        newMember = await Member
            .findOne({ _id: newMember._id })
            .populate('userID')
            .populate('projectID')

        logger.info('memberService - New member created memberID: ', member._id);
        return newMember;
    } catch (error) {
        logger.error('memberService - Create new member failed.')
        throw error;
    }
}

async function update(member) {
    try {
        const updateMember = await Member.findOneAndUpdate({ _id: member._id }, member, { new: true });

        logger.info('memberService - Update Member successfully. memberID: ', member._id);
        return updateMember;
    } catch (error) {
        logger.error('memberService - Update member failed.')
        throw error;
    }
}

async function remove(memberID) {
    try {
        await Member.deleteOne({ _id: memberID });

        logger.info('memberService - Remove member successfully. memberID: ' + memberID);
    } catch (error) {
        logger.error('memberService - Remove member failed.')
        throw error;
    }
}

async function removeByProjectID(projectID){
    try {
       const res =  await Member.deleteMany({ projectID });

        logger.info('memberService - Remove members by projectID successfully. projectID: ' + projectID);
        return res;
    } catch (error) {
        logger.error('memberService - Remove members by projectID failed.')
        throw error;
    }
}

async function isMemberAlreadyExists(userID, projectID) {
    const member = await Member.findOne({ userID, projectID });
    return member !== null;
}

