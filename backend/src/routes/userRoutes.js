const { Router } = require('express');
const {
  getAll, createUser, updateUserById, deleteUserById
} = require('../controller/userController/userController');

const userRouter = () => {
  const userRoutes = Router();

  userRoutes
    .route('/')
    .get(getAll)
    .post(createUser);

  userRoutes
    .route('/:userId')
    .put(updateUserById)
    .delete(deleteUserById);

  return userRoutes;
};

module.exports = userRouter();
