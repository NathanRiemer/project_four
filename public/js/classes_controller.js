angular.module('BehaviorTrackerApp').controller('ClassesController', ClassesController);

ClassesController.$inject = ['$http', '$routeParams'];

function ClassesController($http, $routeParams) {
  var classes = this;

  classes.all = [];

  classes.fetch = function() {
    $http
      .get('/classes')
      .then(function(response) {
        classes.all = response.data;
    });
  };

  // classes.addRecord = function(student, type) {
  //   var data = {
  //     student: student,
  //     type: type
  //   };
  //   $http
  //     .post('/classes/' + student._id + '/behavior', data)
  //     .then(function(response) {
  //       if (response.data.status === 'okay') {
  //         student.num_positives = response.data.student.num_positives;
  //         student.num_negatives = response.data.student.num_negatives;
  //       }
  //     });
  // };

  // console.log($routeParams.classId);
  classes.fetch();
};