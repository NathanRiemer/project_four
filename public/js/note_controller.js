angular.module('BehaviorTrackerApp').controller('NoteController', NoteController);

NoteController.$inject = ['$http', '$routeParams', '$location'];

function NoteController($http, $routeParams, $location) {
  var note = this;
  note.student_name = "";
  note.cancelLink = "/classes/"+ $routeParams.classId + '/students';
  note.type = 'neutral';

  note.quickSelectList = {
    positive: [
      'Listening well',
      'Great answer',
      'Helping others',
      'Other'
    ],
    negative: [
      'Not paying attention',
      'Disruptive',
      'Disrespecting classmates',
      'Other'    
    ],
    neutral: [
      'Went to nurse',
      'Picked up early',
      'Other'
    ]
  };

  note.getStudent = function() {
    $http
      .get('/students/'+ $routeParams.studentId)
      .then(function(response) {
        note.student_name = response.data.first_name + ' ' + response.data.last_name;
    });
  };

  note.addNote = function() {
    var data = {
      type: note.type,
      class_id: $routeParams.classId,
      note_text: note.quickSelect === 'Other' ? note.details : note.quickSelect
    };
    console.log(data);
    $http
      .post('/students/' + $routeParams.studentId + '/behavior', data)
      .then(function(response) {
        $location.path(note.cancelLink);
      });
  }
  note.getStudent();
};