const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../models/userModel');
const strategyFields = require('../constants/strategy-fields');

passport.use(
  'signup',
  new localStrategy.Strategy(
    strategyFields,
    async (req, email, password, done) => {
      try {
        const user = await User.create(
          {
            email,
            password,
            name: req.body.name,
            image: req.body.image,
            postCode: req.body.postCode
          }
        );
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(null, false);
      }
    }
  )
);