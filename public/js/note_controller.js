angular.module('BehaviorTrackerApp').controller('NoteController', NoteController);

NoteController.$inject = ['$http', '$routeParams', '$location'];

function NoteController($http, $routeParams, $location) {
  var note = this;
  console.log($routeParams);
  // console.log('hey');
  // note.all = [];

  // note.fetch = function() {
  //   $http
  //     .get('/note')
  //     .then(function(response) {
  //       note.all = response.data.note;
  //       // console.log(response.data);
  //   });
  // };

  // console.log($routeParams.classId);
  // note.fetch();
};