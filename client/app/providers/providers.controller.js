'use strict';

angular.module('coAppApp')
  .controller('ProvidersCtrl', function ($scope, $http, socket, Auth, User, $location) {
    // $scope.message = 'Hello';

    //Cargar listado de proveedores
    $scope.ProvidersList = [];
      $http.get('/api/providers').success(function(providersList) {
        $scope.ProvidersList = providersList;
        socket.syncUpdates('provider', $scope.ProvidersList);
        // console.log(provider._id);
      });



    // Registrar nuevo proveedor
    $scope.addNewProvider = {};
    $scope.addNewProvider = function(form) {
      $http.post('/api/Providers', {
        name: $scope.NewProvider.name,
        ruc: $scope.NewProvider.ruc,
        phone: $scope.NewProvider.phone
      }),
      // console.log('Estoy enviando la data y el nombre que va es: ' + $scope.NewProvider.name, $scope.NewProvider.ruc, $scope.NewProvider.phone );
      $scope.NewProvider = '';
      // $route.reload();
    };

    $scope.deleteProvider = function(provider) {
      $http.delete('/api/Providers/' + provider._id);
    };

  });
