'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productsReport', {
        url: '/productsReport',
        templateUrl: 'app/productsReport/productsReport.html',
        controller: 'ProductsReportCtrl'
      });
  });