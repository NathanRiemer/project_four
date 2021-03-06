angular.module('BehaviorTrackerApp').controller('ReviewController', ReviewController);

ReviewController.$inject = ['$http', '$routeParams', '$location', 'auth'];

function ReviewController($http, $routeParams, $location, auth) {
  var review = this;
  review.hello = "working";
  review.behaviors = [];

  review.options = {
    chart: {
      type: 'discreteBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 60,
        left: 55
      },
      x: function(d){ return d.date.day; },
      y: function(d){ return d.count; },
      showValues: true,
      valueFormat: function(d){
        return d3.format(',.4f')(d);
      },
      transitionDuration: 500,
      xAxis: {
        axisLabel: 'X Axis'
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 30
      }
    }
  };

  //sample data for reference
  review.data = [{
    key: "Cumulative Return",
    values: [
      { "label" : "A" , "value" : -29.765957771107 },
      { "label" : "B" , "value" : 0 },
      { "label" : "C" , "value" : 32.807804682612 },
      { "label" : "D" , "value" : 196.45946739256 },
      { "label" : "E" , "value" : 0.19434030906893 },
      { "label" : "F" , "value" : -98.079782601442 },
      { "label" : "G" , "value" : -13.925743130903 },
      { "label" : "H" , "value" : -5.1387322875705 }
    ]
  }];

  review.getBehaviors = function() {
    $http
      .get('/api/behaviors')
      .then(function(response) {
        review.behaviors = [{key: "Cumulative Return", values: response.data}];
      });
  };
  review.getBehaviors();

};