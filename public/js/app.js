var BehaviorTrackerApp = angular.module('BehaviorTrackerApp', [
  'ngRoute',
  'nvd3'
]);

BehaviorTrackerApp.factory('auth', function() {
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
      .when('/', {
        templateUrl: 'partials/active_login.html',
        controller: 'LoginController as login'
      })
      .when('/classes', {
        templateUrl: 'partials/active_classes.html',
        controller: 'ClassesController as classes'
      })
      .when('/classes/:classId/students', {
        templateUrl: 'partials/active_students.html',
        controller: 'StudentsController as students'
      })
      .when('/classes/:classId/feed', {
        templateUrl: 'partials/active_feed.html',
        controller: 'FeedController as feed'
      })
      .when('/classes/:classId/students/:studentId/note', {
        templateUrl: 'partials/active_note.html',
        controller: 'NoteController as note'
      })
      .when('/review', {
        templateUrl: 'partials/review.html',
        controller: 'ReviewController as review'
      });
  }
]);