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
    });
  };

  students.addRecord = function(student, type) {
    var data = {
      student: student,
      type: type
    };
    $http
      .post('/students/' + student._id + '/behavior', data)
      .then(function(response) {
        if (response.data.status === 'okay') {
          var index = students.all.findIndex(function(pupil) {
            return pupil._id === response.data.student._id;
          });
          students.all[index] = response.data.student;
        }
      });
  };


  students.fetch();
};