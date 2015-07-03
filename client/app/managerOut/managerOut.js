'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('managerOut', {
        url: '/managerOut',
        templateUrl: 'app/managerOut/managerOut.html',
        controller: 'ManagerOutCtrl'
      });
  });