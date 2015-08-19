'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('providers', {
        url: '/providers',
        templateUrl: 'app/providers/providers.html',
        controller: 'ProvidersCtrl'
      });
  });