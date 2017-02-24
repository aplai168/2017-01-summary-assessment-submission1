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

exports.getOne = function (id, callback) {
  let res;
  for (var i = 0; i < users.length; i++) {
    if(users[i].id === +id) {
      res = users[i];
    }
  }
  callback(null, res);
};

exports.addOne = function (user, callback) {
  users.push(user);
  callback(null, users);
};

exports.updateOne = function (id, newProperties, callback) {
  console.log(newProperties, id, 'newProperties')

  _.each(users, (user) => {
    if (user.id === +id) {
      user.name = newProperties.name;
      user.email = newProperties.email;
      console.log(newProperties, 'updateOne')
    }
  });
  // console.log(users, 'users')
  callback(null, users);
};

exports.deleteOne = function (id, callback) {
  _.each(users, (user, i) => {
    if (user && user.id === +id) {
      users.splice(i, 1);
    }
  });
  callback(null, users);
  console.log(users, 'users');
};
