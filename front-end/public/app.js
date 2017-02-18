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
  $scope.initialize = function() {
    Users.getUsers()
    .then(function(allUsers) {
      $scope.data.allUsers = allUsers;
    })
  }
  $scope.initialize();
  $scope.add = function() {
    Users.addUser()
    .then(function(newUser) {
      // look up how to really do this
      // let added = {
      //   newUser.name,
      //   newUser.email,
      // }
      // $scope.data = added;
    })
  }
}]);


ang.factory('Users', ['$http', function($http){
  const getUsers = function() {
    return $http.get('/api/users')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  };
  const addUser = function(user) {
    return $http.post('/api/users')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  };
  return {
    getUsers,
    addUser,
  };
}]);
