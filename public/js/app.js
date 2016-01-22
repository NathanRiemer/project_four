var BehaviorTrackerApp = angular.module('BehaviorTrackerApp', [
  'ngRoute'
]);

BehaviorTrackerApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider
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