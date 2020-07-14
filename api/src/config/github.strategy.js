const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.44cc7e7ec3ceaff5",
      clientSecret: "333974c5a73b41f35eca75f52cc34484c519ae51",
      callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(undefined, user);
});

passport.deserializeUser(function (user, done) {
  done(undefined, user);
});
