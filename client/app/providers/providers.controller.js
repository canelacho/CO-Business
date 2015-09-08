'use strict';

angular.module('coAppApp')
  .controller('ProvidersCtrl', function ($scope) {
    $scope.message = 'Hello';


      var person1 = {
        name: "Alimentos La Pradera",
        ruc: "34734938475 DV-4",
        phone: "6749-3456"
      };
      var person2 = {
        name: "Dist EL Carmen",
        ruc: "34734938475 DV-4",
        phone: "6749-3456"
      };
      var person3 = {
        name: "Comidas Crianza",
        ruc: "34734938475 DV-4",
        phone: "6749-3456"
      };


    var providerList = [person1,person2,person3];
    $scope.dataProviders = providerList;
    console.log(providerList[0]);
  });
