const handleError = require('../../utils/handle.errors');

module.exports = {
  getProfile: (req, res) => {
    try {
      res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.headers.authorization
      });
    } catch (error) {
      handleError.call(res, error);
    }
  }
};
