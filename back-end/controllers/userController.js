var User = require('../models/User');

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.find(name, callback);
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  // User.update({ name: name, email: newEmail }, callback);
  // var query = { name: 'borne' };
  User.findOneAndUpdate({ name: name }, { email: newEmail }, (err, data) => {
    if (err) console.log(err);
    data.save(callback);
  });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}, (err, users) => {
    if (err) return err;
    return callback;
  });
};


// Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
// http://mongoosejs.com/docs/models.html
