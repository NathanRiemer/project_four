angular.module('BehaviorTrackerApp').controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$routeParams'];

function LoginController($http, $routeParams) {
  var login = this;
  login.username = "";
  login.password = "";
  login.currentUser = {};

  login.submitCredentials = function() {
    $http
      .post('/sessions', {username: login.username, password: login.password})
      .then(function(response) {
        login.currentUser = response.data;
        console.log(response);
      });
  };

};