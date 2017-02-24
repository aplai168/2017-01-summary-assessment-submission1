var expect = require('chai').expect;
var sinon = require('sinon');
var mongoose = require('mongoose');
var User = require('../models/User');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['users'].remove(done);
};

describe('User Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Clear database before each test and then seed it with example `users` so that you can run tests
  beforeEach(function (done) {
    clearDB(function () {
      var users = [
        {
          name: 'Magee',
          email: 'magee@magee.com'
        },
        {
          name: 'Dan',
          email: 'dan@dan.com'
        },
        {
          name: 'Beth',
          email: 'beth@beth.com'
        },
        {
          name: 'Sunny',
          email: 'sunny@sunny.com'
        },
        {
          name: 'Zach',
          email: 'zach@zach.com'
        }
      ];

      // See http://mongoosejs.com/docs/models.html for details on the `create` method
      User.create(users, done);
    });
  });
  // it("retrieves by email", function(done){
  //   User.getUserByName('Zach', function(doc){
  //     doc.email.should.equal("zach@zach.com");
  //     done();
  //   });
  // });
  // it('should have a method that given the name of a user, retrieves their record from the database', function (done) {
  //   // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
  //   // HINT: The `done` passed in is quite important...
  //   // THIS IS NOT TESTING ANYTHING
  //
  //   User.find({ name: 'Zach'}, (err, results) => {
  //     expect(results).toEqual('Zach');
  //     done();
  //   })
  //   // db.createCollection(collectionName, function(err, collection) {
  //   //   collection.find().toArray(function(err, results) {
  //   //     // Should have one result:
  //   //     expect(results.length).toEqual(1);
  //   //
  //   //     /* TODO edit this test to match the name of the
  //   //      * property where you're storing the page source:*/
  //   //     expect(results[0].pageSource).toMatch(/Google/);
  //   //
  //   //     db.close();
  //   //     done();
  //   //   });
  //   //   });
  //
  //   // it('should check for reposts with same name', sinon.test(function() {
  //   //     this.stub(User, 'find');
  //   //     var expectedName = 'Zach';
  //   //     var m = new User({ name: 'Zach' });
  //   //
  //   //     m.getUserByName(function() { });
  //   //
  //   //     sinon.assert.calledWith(User.findOne, {
  //   //         name: expectedName,
  //   //         // repost: true
  //   //     });
  //   // }));
  //
  //
  // });
  //
  // it('should have a method that given the name of a user, updates their `email` property', function (done) {
  //   // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
  //   // HINT: The `done` passed in is quite important...
  //   User.findOneAndUpdate({ name: 'Zach' }, {email: 'metairie@zach.com' }, done);
  //   // User.find({ name: 'Zach', email: 'metairie@zach.com'}, done);
  // });
  //
  // it('should have a method that reads all users from the database at once', function (done) {
  //   // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
  //   // HINT: The `done` passed in is quite important...
  //
  // });

});
