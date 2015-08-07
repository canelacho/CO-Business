'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inBox', {
        url: '/inBox',
        templateUrl: 'app/inBox/inBox.html',
        controller: 'InBoxCtrl'
      });
  });