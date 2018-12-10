const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const CONFIG = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: CONFIG.SECRET,
  issuer: CONFIG.JWT.ISSUER,
  audience: CONFIG.JWT.AUDIENCE,
};

// We tell passport that "mmn-auth" refers to a JWT authentification strategy
passport.use('mmn-auth', new JwtStrategy(jwtOptions, (jwtPayload, done) => {
  // This strategy checks whether the JWT contains read access rights
  if (jwtPayload.auth.read) {
    // If so, everything is fine
    return done(null, jwtPayload.sub);
  } else {
    // Otherwise authentification was not successful
    return done(null, false);
  }
}));


// API endpoint to authenticate
router.post('/', (req, res) => {
  // We check the API key. Usually this step includes a database lookup.
  const key = req.body.key || req.query.key;

  if (key === CONFIG.API_KEY) {
    // We create a new JWT
    const token = jwt.sign({
      aud: jwtOptions.audience,
      iss: jwtOptions.issuer,
      auth: { read: true },
      sub: 'mmn-user',
    }, jwtOptions.secretOrKey);
    // And send it to the client
    res.json({ token });
  } else {
    // Otherwise the user is not authorized
    res.status(401).json({
      error: 'Invalid API key',
    });
  }
});

module.exports = router;

