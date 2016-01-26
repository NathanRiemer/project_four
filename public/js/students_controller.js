angular.module('BehaviorTrackerApp').controller('StudentsController', StudentsController);

StudentsController.$inject = ['$http', '$routeParams', '$location', '$interval'];

function StudentsController($http, $routeParams, $location, $interval) {
  var students = this;

  students.all = [];
  students.classTitle = "";
  students.classSubject = "";

  students.fetch = function() {
    $http
      .get('/classes/'+$routeParams.classId+'/students')
      .then(function(response) {
        students.all = response.data.students;
        students.classTitle = response.data.grade + response.data.name;
        students.classSubject = response.data.subject;

        students.all.forEach(function(student) {
          student.count = {};
          $http
            .get('/classes/'+$routeParams.classId+'/students/'+student._id+'/note')
            .then(function(resp) {
              student.count.note = resp.data.count;
            });
          $http
            .get('/classes/'+$routeParams.classId+'/students/'+student._id+'/positive')
            .then(function(resp) {
              student.count.positive = resp.data.count;
            });
          $http
            .get('/classes/'+$routeParams.classId+'/students/'+student._id+'/negative')
            .then(function(resp) {
              student.count.negative = resp.data.count;
            });
        });
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
          student.count[type]++
        }
      });
  };

  students.newNote = function(student) {
    var newPath = $location.path() + '/' + student._id + '/note';
    $interval.cancel(stop);
    $location.path(newPath);    
  };

  var stop = $interval(function() {
    students.fetch();
  }, 30000);

  students.backToClasses = function() {
    $interval.cancel(stop);
    $location.path('/classes');
  }

  students.getFeed = function() {
    $interval.cancel(stop);
    $location.path('/classes/'+ $routeParams.classId + '/feed');
  }


  students.fetch();
};