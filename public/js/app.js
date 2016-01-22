var BehaviorTrackerApp = angular.module('BehaviorTrackerApp', [
  'ngRoute'
]);

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
      });
  }
]);