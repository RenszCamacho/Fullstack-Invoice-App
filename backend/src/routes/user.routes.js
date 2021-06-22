const { Router } = require('express');
const userController = require('../controller/userController/userController');

function userRouter() {
  const userRoutes = Router();

  userRoutes
    .route('/profile')
    .get(userController.getProfile);

  return userRoutes;
}

module.exports = userRouter;
