'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('managerOutReport', {
        url: '/managerOutReport',
        templateUrl: 'app/managerOutReport/managerOutReport.html',
        controller: 'ManagerOutReportCtrl'
      });
  });