'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('wall', {
        url: '/wall',
        templateUrl: 'app/wall/wall.html',
        controller: 'WallCtrl'
      });
  });