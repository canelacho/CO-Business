'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reportList', {
        url: '/reportList',
        templateUrl: 'app/reportList/reportList.html',
        controller: 'ReportListCtrl'
      });
  });