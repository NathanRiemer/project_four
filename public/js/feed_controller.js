angular.module('BehaviorTrackerApp').controller('FeedController', FeedController);

FeedController.$inject = ['$http', '$routeParams', '$location', '$interval'];

function FeedController($http, $routeParams, $location, $interval) {
  var feed = this;
  feed.classLink = '#/classes/'+ $routeParams.classId + '/students';

  feed.all = [];

  feed.classTitle = "";
  feed.classSubject = "";

  feed.fetchClass = function() {
    $http
      .get('/classes/'+$routeParams.classId)
      .then(function(response) {
        feed.classTitle = response.data.grade + response.data.name;
        feed.classSubject = response.data.subject;
      });
  };

  feed.fetch = function() {
    $http
      .get('/classes/'+$routeParams.classId + '/feed')
      .then(function(response) {
        feed.all = response.data;
        // console.log(response.data);
      });
  };


  feed.fetchClass();
  feed.fetch();
};