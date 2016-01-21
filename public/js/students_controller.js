angular.module('BehaviorTrackerApp').controller('StudentsController', StudentsController);

StudentsController.$inject = ['$http'];

function StudentsController($http) {
  var students = this;

  students.all = [];

  students.fetch = function() {
    $http
      .get('/students')
      .then(function(response) {
        students.all = response.data;
        console.log(response.data);
    });
  };
  students.fetch();
};