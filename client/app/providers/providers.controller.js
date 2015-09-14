'use strict';

angular.module('coAppApp')
  .controller('ProvidersCtrl', function ($scope, $http, Auth, User) {
    $scope.message = 'Hello';

    //Cargar listado de proveedores
    $scope.ProvidersList = [];
      $http.get('../server/api/providers').success(function(providersList) {
        $scope.ProvidersList = providersList;
      });



    // Registrar nuevo proveedor
    $scope.addNewProvider = {};
    $scope.addNewProvider = function() {
      $http.post('/api/Providers', {
        name: $scope.NewProvider.name,
        ruc: $scope.NewProvider.ruc,
        phone: $scope.NewProvider.phone
      }),
      console.log('Estoy enviando la data y el nombre que va es: ' + $scope.NewProvider.name, $scope.NewProvider.ruc, $scope.NewProvider.phone );
    }

  });
