var _ = require('underscore');

// The seeded state of our in-memory "database"
var users = [
  {
    id: 1,
    name: 'Taka',
    email: 'taka@taka.com'
  },
  {
    id: 2,
    name: 'Nayo',
    email: 'nayo@nayo.com'
  },
  {
    id: 3,
    name: 'Amrit',
    email: 'amrit@amrit.com'
  }
];

var nextId = 4;

var getNextId = function () {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function () {
  return users;
};

exports.setAll = function (newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function (id) {
  _.filter(users, (user) => {
    if (user.id === id) {
      // console.log(user, 'user')
      return user;
    }
  });
};

exports.addOne = function (user) {
  users.push(user);
  // console.log(users, 'users');
};

exports.updateOne = function (id, newProperties) {
  _.each(users, (user) => {
    if (user.id === id) {
      user.id = newProperties.id;
      user.name = newProperties.name;
      user.email = newProperties.email;
    }
  });
  // console.log(users, 'users')
};

exports.deleteOne = function (id) {
  _.each(users, (user, i) => {
    console.log(user, 'id');
    if (user.id === id) {
      users.splice(i, 1);
    }
  });
  // console.log(users, 'users');
};
