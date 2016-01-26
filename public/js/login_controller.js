angular.module('BehaviorTrackerApp').controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$routeParams', '$location', 'auth'];

function LoginController($http, $routeParams, $location, auth) {
  var login = this;
  login.username = "";
  login.password = "";
  login.message = "";

  login.submitCredentials = function() {
    $http
      .post('/sessions', {username: login.username, password: login.password})
      .then(function(response) {
        if (response.data.success) {
          auth.setUser(response.data.currentUser);
        } else {
          login.message = "Try again";
        }
      });
  };

  login.logout = function() {
    $http
      .delete('/sessions')
      .then(function(response) {
        auth.setUser({username: '', first_name: '', last_name: ''});
      });
  };

};