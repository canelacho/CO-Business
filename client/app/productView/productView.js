'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productView', {
        url: '/productView',
        templateUrl: 'app/productView/productView.html',
        controller: 'ProductViewCtrl'
      });
  });