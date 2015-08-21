'use strict';

angular.module('coAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('invoiceRegister', {
        url: '/invoiceRegister',
        templateUrl: 'app/invoiceRegister/invoiceRegister.html',
        controller: 'InvoiceRegisterCtrl'
      });
  });