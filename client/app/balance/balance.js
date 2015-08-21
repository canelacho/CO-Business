'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('balance', {
        url: '/balance',
        templateUrl: 'app/balance/balance.html',
        controller: 'BalanceCtrl'
      });
  });