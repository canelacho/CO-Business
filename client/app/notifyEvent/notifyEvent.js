'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notifyEvent', {
        url: '/notifyEvent',
        templateUrl: 'app/notifyEvent/notifyEvent.html',
        controller: 'NotifyEventCtrl'
      });
  });