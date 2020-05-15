const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GoogleUser = require('./../../models/GoogleUser');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./../../config/googlePassport');
module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            console.log(profile)
            console.log('Access token--', accessToken)
            console.log('refresh token--', refreshToken)

            GoogleUser.findOneAndUpdate({ googleId: profile.id }, {
                name: profile.displayName,
                googleId: profile.id,
                accessToken: accessToken
            }, {
                upsert: true,
                useFindAndModify: false
            })
                .then(user => done(null, user))
                .catch(err => done(err, null))
        }
    ));
}