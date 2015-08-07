'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('managerInReport', {
        url: '/managerInReport',
        templateUrl: 'app/managerInReport/managerInReport.html',
        controller: 'ManagerInReportCtrl'
      });
  });