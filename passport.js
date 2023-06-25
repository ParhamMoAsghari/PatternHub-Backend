const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { getUserById } = require('./data/users'); // Implement this function to fetch user by ID
const secretKey = 'your-secret-key'; // Replace with your secret key

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
};

passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
        const user = getUserById(jwtPayload.id); // Fetch user by ID
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
);

module.exports = passport;
