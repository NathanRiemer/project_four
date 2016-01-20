angular.module('BehaviorTrackerApp').controller('StudentsController', StudentsController);

// StudentsController.$inject = ['$http'];

function StudentsController() {
  var ctrl = this;

  ctrl.all = [
    {first_name: "Lisa", last_name: "Gaetjens"},
    {first_name: "Naomi", last_name: "Riemer"},
    {first_name: "Nathan", last_name: "Riemer"}
  ];
};