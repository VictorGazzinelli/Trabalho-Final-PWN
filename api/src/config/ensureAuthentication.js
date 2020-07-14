module.exports = {
  ensureAuthentication(req, res, next) {
    return next();
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
}
