angular.module('BehaviorTrackerApp').controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$routeParams', '$location', 'auth'];

function LoginController($http, $routeParams, $location, auth) {
  var login = this;
  login.username = "";
  login.password = "";
  // login.currentUser = auth;
  login.message = "";
  // login.currentUser = auth;

  login.submitCredentials = function() {
    $http
      .post('/sessions', {username: login.username, password: login.password})
      .then(function(response) {
        if (response.data.success) {
          // console.log(response.data);
          auth.setUser(response.data.currentUser);
          // login.currentUser = auth;
          // login.currentUser = response.data.currentUser;
          // $location.path('/classes');
        } else {
          // console.log('nope');
          login.message = "Try again";
        }
        // console.log(response);
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