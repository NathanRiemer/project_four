angular.module('BehaviorTrackerApp').controller('StudentsController', StudentsController);

StudentsController.$inject = ['$http', '$routeParams'];

function StudentsController($http, $routeParams) {
  var students = this;

  students.all = [];

  students.fetch = function() {
    $http
      .get('/classes/'+$routeParams.classId+'/students')
      .then(function(response) {
        // console.log(response.data);
        students.all = response.data;
    });
  };

  students.addRecord = function(student, type) {
    var data = {
      type: type,
      class_id: $routeParams.classId,
      note_text: 'Blank for now'
    };
    $http
      .post('/students/' + student._id + '/behavior', data)
      .then(function(response) {
        if (response.data.status === 'okay') {
          student.num_positives = response.data.student.num_positives;
          student.num_negatives = response.data.student.num_negatives;
        }
      });
  };

  console.log($routeParams.classId);
  students.fetch();
};