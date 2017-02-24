var User = require('../models/User');

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function (name, callback) {
  // TODO
  User.find(name, (err, data) => {
    if (err) console.log(err);
    return callback((err, data)=> {
      if(err) return err;
      else return data;
    });
  });
};
//promise is used here
// http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
// example ==========================
// var _findByEmail = function(email, success, fail){
//   _model.findOne({email:email}, function(e, doc){
//     if(e){
//       fail(e)
//     }else{
//      success(doc);
//    }
//  });
// }
// Given the name of a user, update their `email` property
exports.updateEmailByName = function (name, newEmail, callback) {
  // TODO
  // User.update({ name: name, email: newEmail }, callback);
  // var query = { name: 'borne' };
  User.findOneAndUpdate({ name: name }, { email: newEmail }, (err, data) => {
    if (err) console.log(err);
    // data.save(callback);
    return callback((err, data)=> {
      if(err) return err;
      else return data;
    });
  });
};

// Read all users from the database at once
exports.readAllUsers = function (callback) {
  // TODO
  User.find({}, (err, users) => {
    if (err) return err;
    return callback((err, data)=> {
      if(err) return err;
      else return data;
    });
  });
};


// Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
// http://mongoosejs.com/docs/models.html
