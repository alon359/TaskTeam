const logger = require('../services/logger.service');
const memberService = require('../api/member/member.service');

function requireAuth(req, res, next) {
  if (!req.session || !req.session.user) {
    res.status(401).end('Please login to perform this action');
    return;
  }
  next();
}

async function requireProjectMembership(req, res, next) {
  const userID = req.session.user._id;
  const projectID = req.body.projectID || req.body._id || req.prams.id;

  const filter = { userID, projectID };
  const memberUser = await memberService.getByID(filter)

  if (!memberUser) {
    res.status(403).end('You don\'t permission to do this action');
    return;
  }
  next();
}

async function requireAdminProject(req, res, next) {
  console.log({ req });
  const userID = req.session.user._id;
  const projectID = req.body.projectID || req.body._id || req.params.id;

  const filter = { userID, projectID, permission: 'admin' };
  const memberUser = await memberService.getOneMember(filter)

  // Checks if some user founded
  if (!memberUser) {
    res.status(403).end('You don\'t permission to do this action');
    return;
  }
  next();
}

module.exports = {
  requireAuth,
  requireAdminProject,
  requireProjectMembership
}
