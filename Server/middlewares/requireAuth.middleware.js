const logger = require('../services/logger.service');
const memberService = require('../api/member/member.service');
const taskService = require('../api/task/task.service');

function requireAuth(req, res, next) {
  if (!req.session || !req.session.user) {
    res.status(401).end('Please login to perform this action');
    return;
  }
  next();
}

// Checks if is a project member by userID and projectID
async function requireProjectMembership(req, res, next) {
  const userID = req.session.user._id;

  // If the user ask data by query with userID
  let queryUserID = req.query.userID || null
  if (queryUserID && userID !== queryUserID) {
    res.status(403).end('You don\'t have permission to do this action');
    return;
  }

  // Gets the projectID
  let projectID = req.body.projectID || req.query.projectID || req.params.projectID || null;
  // If projectID not received in the request
  if (!projectID) {
    if (queryUserID) {
      next();
      return;
    } else if ("taskID" in req.params) {
      const task = await taskService.getByID(req.params.taskID)
      projectID = task.projectID._id;
    } else if ("memberID" in req.params) {
      const member = await memberService.getByID(req.params.memberID)
      projectID = member.projectID;
    } else if ("_id" in req.body) {
      projectID = req.body._id;
    } else {
      res.status(404).end('Data is missing for this request')
      return;
    }
  }

  const filter = { userID, projectID };
  const userMember = await memberService.getOneMember(filter)

  if (!userMember) {
    res.status(403).end('You don\'t permission to do this action');
    return;
  }
  req.userMember = userMember;
  next();
}

async function requireAdminProject(req, res, next) {
  // Checks if some user founded
  if (req.userMember.permission !== 'admin') {
    res.status(403).end('You don\'t have permission to do this action');
    return;
  }
  next();
}

module.exports = {
  requireAuth,
  requireAdminProject,
  requireProjectMembership
}
