/* eslint-disable consistent-return */
function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/signin');
  }
  next();
}

module.exports = requireAuth;
