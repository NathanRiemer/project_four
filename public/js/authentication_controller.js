angular.module('BehaviorTrackerApp').controller('AuthenticationController', AuthenticationController);

AuthenticationController.$inject = ['$http', '$routeParams', '$location', 'auth'];

function AuthenticationController($http, $routeParams, $location, auth) {
  var authenticator = this;
  authenticator.currentUser = auth;

  authenticator.checkIfLoggedIn = function() {
    $http
      .get('/sessions')
      .then(function(response) {
        auth.setUser(response.data);
      });
  };
  authenticator.checkIfLoggedIn();

};