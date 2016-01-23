angular.module('BehaviorTrackerApp').controller('LoginController', LoginController);

LoginController.$inject = ['$http', '$routeParams', '$location'];

function LoginController($http, $routeParams, $location) {
  var login = this;
  login.username = "";
  login.password = "";
  login.currentUser = {};
  login.message = "";

  login.submitCredentials = function() {
    $http
      .post('/sessions', {username: login.username, password: login.password})
      .then(function(response) {
        if (response.data.success) {
          // login.currentUser = response.data.currentUser;
          $location.path('/classes');
        } else {
          // console.log('nope');
          login.message = "Try again";
        }
        // console.log(response);
      });
  };

  login.pushButton = function() {
    // console.log($location.path());
    $location.path('/classes');
  };

};