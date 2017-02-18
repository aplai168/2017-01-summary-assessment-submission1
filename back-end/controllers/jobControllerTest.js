var expect = require('chai').expect;
var mongoose = require('mongoose');


var dbURI = 'mongodb://localhost/jobquery';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['jobs'].remove(done);
};

describe('Job Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      // TODO: Seed database with some jobs to run tests against.
      var jobs = [
        {
          title: 'Magee',
          description: 'constructor',
          postedDate: '7/2/2016',
          salary: 40000
        },
        {
          title: 'Alice',
          description: 'doctor',
          postedDate: '8/5/2016',
          salary: 1000000
        },
      ];
    });
  });

  // TODO: Write your tests for jobController here
});
