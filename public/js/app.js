var BehaviorTrackerApp = angular.module('BehaviorTrackerApp', [
  'ngRoute'
]);

BehaviorTrackerApp.factory('auth', function() {
  // var auth = {};
  currentUser = {};
  currentUser.username = "";
  currentUser.first_name = "";
  currentUser.last_name = "";

  currentUser.setUser = function(user) {
    currentUser.username = user.username;
    currentUser.first_name = user.first_name;
    currentUser.last_name = user.last_name;
  };

  return currentUser;
});

BehaviorTrackerApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'partials/active_login.html',
        controller: 'LoginController'
      })
      .when('/classes', {
        templateUrl: 'partials/active_classes.html',
        controller: 'ClassesController'
      })
      .when('/classes/:classId/students', {
        templateUrl: 'partials/active_students.html',
        controller: 'StudentsController'
      })
      .when('/classes/:classId/students/:studentId/note', {
        templateUrl: 'partials/active_note.html',
        controller: 'NoteController'
      });
  }
]);