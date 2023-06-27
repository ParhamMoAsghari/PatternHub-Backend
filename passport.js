const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const usersDB = require('./data/users'); // Implement this function to fetch user by ID
require('dotenv').config();
const secretKey = process.env.JWT_SECRET; // Replace with your secret key

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
};

passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
        const user = usersDB.getUserById(jwtPayload.id); // Fetch user by ID
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
);

module.exports = passport;
