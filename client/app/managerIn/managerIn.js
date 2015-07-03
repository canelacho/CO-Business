'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('managerIn', {
        url: '/managerIn',
        templateUrl: 'app/managerIn/managerIn.html',
        controller: 'ManagerInCtrl'
      });
  });