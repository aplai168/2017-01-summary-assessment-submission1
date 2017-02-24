// |       URL      | HTTP Verb | POST Body |                   Result                      |
// |:--------------:|:---------:|:---------:|:---------------------------------------------:|
// | /api/users     |    GET    |   empty   |                      Return JSON of all users |
// | /api/users     |    POST   |    JSON   |                               Create new user |
// | /api/users/:id |    GET    |   empty   | Return JSON of single user with matching `id` |
//
// Your goal will be to **implement using either Angular, Backbone, or React, a single page front end to interact with this api.** Your front end should allow the user to add new users, and view current users, and should express your understanding of what a well-structured application (albeit a small one) looks like.

const ang = angular.module('app', []);
ang.controller('UserController', ['$scope', 'Users', function($scope, Users){
  $scope.data = {};
  $scope.users = {};

  $scope.initialize = function() {
    Users.getUsers()
    .then(function(allUsers) {
      $scope.data.allUsers = allUsers;
    })
  }
  $scope.chooseById = function() {
    Users.chooseUser()
    .then(function(user) {
      $scope.data.allUsers = user;
    })
  }
  $scope.initialize();
  $scope.add = function() {
    //just add $http.post('/api/users');
    Users.addUser($scope.users)
    .then(function(newUser) {
      console.log(newUser, 'newuser');
      //clear the form
      $scope.users = {};
      $scope.data.allUsers = newUser;
      $scope.initialize();
    });
  };
}]);


ang.factory('Users', ['$http', function($http){
  const getUsers = function() {
    return $http.get('/api/users')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  };
  const chooseUser = function() {
    return $http.get('/api/users/:id')
    .then((res) => {
      console.log(res, 'res')
      return res.data;
    })
  }
  const addUser = function(user) {
    //you must pass in the user data to get it through!!
    return $http.post('/api/users', user)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  };
  return {
    getUsers,
    addUser,
    chooseUser,
  };
}]);
