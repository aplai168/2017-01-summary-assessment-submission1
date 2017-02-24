var _ = require('underscore');
var chai = require('chai');
var expect = chai.expect;
var Users = require('../models/users.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));


describe('Users Model', function () {
  var testUsers;

  beforeEach(function () {
    testUsers = [
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

    Users.setAll(testUsers);
  });

  // Fill this out if you like..
  // it('grab all users', function () {
  //   expect(Users.getAll()).to.equal(testUsers);
  // });
  // it('get one', function () {
  //   expect(Users.getOne(2)).to.equal(testUsers[1]);
  // });
  // it('add one', function () {
  //   expect(Users.addOne({
  //           id: 4,
  //           name: 'Alice',
  //           email: 'alice@gmail.com'
  //         })).to.equal(testUsers[1]);
  // });
  // it('update one', function () {
  //   expect(Users.updateOne( 1, {
  //           id: 1,
  //           name: 'Alice',
  //           email: 'alice@gmail.com'
  //         })).to.equal(testUsers[1]);
  // });
  // it('deleteOne', function () {
  //   var testUsersDeleted = [
  //     {
  //       id: 1,
  //       name: 'Taka',
  //       email: 'taka@taka.com'
  //     },
  //     {
  //       id: 3,
  //       name: 'Amrit',
  //       email: 'amrit@amrit.com'
  //     }
  //   ];
  //   Users.deleteOne(1);
  //   expect(testUsers).to.equal(testUsersDeleted);
  // });
});
