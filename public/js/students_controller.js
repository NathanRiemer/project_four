angular.module('BehaviorTrackerApp').controller('StudentsController', StudentsController);

StudentsController.$inject = ['$http', '$routeParams', '$location'];

function StudentsController($http, $routeParams, $location) {
  var students = this;

  students.all = [];
  students.classTitle = "";
  students.classSubject = "";

  students.fetch = function() {
    $http
      .get('/classes/'+$routeParams.classId+'/students')
      .then(function(response) {
        // console.log(response.data);
        students.all = response.data.students;
        students.classTitle = response.data.grade + response.data.name;
        students.classSubject = response.data.subject;
    });
  };

  students.addRecord = function(student, type) {
    var data = {
      type: type,
      class_id: $routeParams.classId,
      note_text: ''
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

  students.newNote = function(student) {
    // console.log('Note'+student.first_name);
    // $location.path('/classes');
    // console.log($location.path());
    var newPath = $location.path() + '/' + student._id + '/note';
    $location.path(newPath);    
  };

  // console.log($routeParams.classId);
  students.fetch();
};