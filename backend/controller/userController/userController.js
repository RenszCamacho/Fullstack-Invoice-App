const User = require('../../models/userModel');

const userController = () => {
  const getAll = async (req, res) => {
    try {
      const users = await User.find(req.query);
      res.json(users);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updateUserById = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteUserById = async (req, res) => {
    try {
      await User.findByIdAndDelete(
        req.params.UserId
      );
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getAll,
    createUser,
    updateUserById,
    deleteUserById
  };
};

module.exports = userController();
