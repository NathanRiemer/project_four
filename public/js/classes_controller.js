angular.module('BehaviorTrackerApp').controller('ClassesController', ClassesController);

ClassesController.$inject = ['$http', '$routeParams'];

function ClassesController($http, $routeParams) {
  var classes = this;

  classes.all = [];

  classes.fetch = function() {
    $http
      .get('/classes')
      .then(function(response) {
        classes.all = response.data.classes;
    });
  };

  classes.fetch();
};