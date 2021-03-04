const cookieSession = require('cookie-session');
const passport = require('passport');
const {
  google: { clientID },
  google: { clientSecret },
} = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('./models/dbModel');

module.exports = (app: any) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: `/oAuth`,
      },
      (accessToken: string, refreshToken: string, profile: any, done: any) => {
        // get user from users table using profile.id
        const getUser = { id: profile.id, email: profile._json.email };

        const findUserQuery = `SELECT * FROM users WHERE _id = $1`;
        const findUserParams = [getUser.id];

        db.query(findUserQuery, findUserParams).then(({ rows }: any) => {
          if (rows.length) return done(null, getUser);

          //if user not in db -> create user in users table with profile.id
          const createUserQuery = `INSERT INTO users (_id, email) VALUES ($1, $2);`;
          const userValues = [getUser.id, getUser.email];

          db.query(createUserQuery, userValues).then(() => {
            done(null, getUser);
          });
        });
      }
    )
  );

  app.use(
    cookieSession({
      // day in ms
      maxAge: 24 * 60 * 60 * 1000,
      keys: ['key 1'],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user: any, done: any) => {
    return done(null, user.id);
  });

  // @ts-ignore
  passport.deserializeUser((id, done) => {
    // callss done with user object that can be retrieved with id provided to serializeUser
    const findUserQuery = `SELECT * FROM users WHERE _id = $1`;
    const findUserParams = [id];

    db.query(findUserQuery, findUserParams)
      .then(({ rows }: any) => {
        // if user can't be found
        if (!rows || !rows.length) {
          return done(null, false);
        }

        const { _id: id, email } = rows[0];
        done(null, { id, email });
      })
      // @ts-ignore
      .catch((err) => next(err));
  });

  app.get(
    '/oAuth',
    passport.authenticate('google', {
      failureRedirect: '/',
      successRedirect: '/job',
    })
  );

  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  // @ts-ignore
  app.get('auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
