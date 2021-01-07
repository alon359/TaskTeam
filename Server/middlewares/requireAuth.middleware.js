const logger = require('../services/logger.service')

async function requireAuth(req, res, next) {
  if (!req.session || !req.session.user) {
    res.status(401).end('Please login to perform this action');
    return;
  }
  next();
}

async function requireAdmin(req, res, next) {
  const user = req.session.user;
  if (!user.isAdmin) {
    res.status(403).end('You don\'t permission to do this action');
    return;
  }
  next();
}

module.exports = {
  requireAuth,
  requireAdmin
}
