'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('receivingNote', {
        url: '/receivingNote',
        templateUrl: 'app/receivingNote/receivingNote.html',
        controller: 'ReceivingNoteCtrl'
      });
  });