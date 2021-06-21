/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const handleError = require('../../utils/handle.errors');

let refreshTokens = [];

function authController() {
  async function singUp(req, res) {
    try {
      res.json({
        message: 'Signup successful',
        user: req.user
      });
    } catch (error) {
      handleError.call(res, error);
    }
  }

  async function logIn(req, res, next) {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');
            return next(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = {
                _id: user._id,
                email: user.email,
                name: user.name,
                image: user.image
              };
              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                { expiresIn: '60m' }
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET
              );

              refreshTokens.push(refreshToken);

              return res.json({
                token,
                refreshToken
              });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }

  async function getToken(req, res) {
    const { token } = req.body;

    if (!token) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }

    return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      const data = { _id: user._id, email: user.email };

      const accessToken = jwt.sign(
        { user: data },
        process.env.JWT_SECRET,
        { expiresIn: '60m' }
      );

      return res.json({
        accessToken
      });
    });
  }

  async function logOut(req, res) {
    const { token } = req.body;

    refreshTokens = refreshTokens.filter((current) => current !== token);

    res.send('Logout successful');
  }

  return {
    singUp,
    logIn,
    getToken,
    logOut
  };
}

module.exports = authController();
