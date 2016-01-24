angular.module('BehaviorTrackerApp').controller('AuthenticationController', AuthenticationController);

AuthenticationController.$inject = ['$http', '$routeParams', '$location', 'auth'];

function AuthenticationController($http, $routeParams, $location, auth) {
  var authenticator = this;
  authenticator.currentUser = auth;


};