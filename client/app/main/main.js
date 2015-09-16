'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/login',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'

        // .state('login', {
        //   url: '/login',
        //   templateUrl: 'app/account/login.html',
        //   controller: 'LoginCtrl'

      });
  });
