const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.61fd38cbcb2d64d5",
      clientSecret: "59d430be8932bea3ed33220f0a5fe02f509133f4",
      callbackURL: "https://pwn-trabalho-final.herokuapp.com/auth/github/callback",
      scope: 'user:email',
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
