const { logger } = require("../config");
const { user: userService } = require("../services");

const getUser = (req, res) => {
  userService
    .getUser(req.params.id)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      logger.error(err);
      res.send("Error getting user");
    });
};

const getUsers = () => {};

const createUser = (req, res) => {
  userService
    .createUser(req.query)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      logger.error(err);
      res.send("Error saving user"); // TODO install error classes
    });
};

const updateUser = (req, res) => {
  userService
    .getUser(req.params.id)
    .then((user) => userService.updateUser(user, req.query))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      logger.error(err);
      res.send("Error updating user");
    });
};

const deleteUser = (req, res) => {
  userService
    .getUser(req.params.id)
    .then((user) => userService.deleteUser(user))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      logger.error(err);
      res.send("Error deleting user");
    });
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
