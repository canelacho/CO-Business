'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('closingStatement', {
        url: '/closingStatement',
        templateUrl: 'app/closingStatement/closingStatement.html',
        controller: 'ClosingStatementCtrl'
      });
  });