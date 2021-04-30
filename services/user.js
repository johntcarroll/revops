const { User } = require("../model");

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    User.findById(userId)
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getUsers = () => {};

const createUser = (userBody) => {
  return new Promise((resolve, reject) => {
    User.create(userBody)
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const updateUser = (user, updates) => {
  return new Promise((resolve, reject) => {
    Object.assign(user, updates);
    user
      .save()
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteUser = (user) => {
  return new Promise((resolve, reject) => {
    user
      .remove()
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
