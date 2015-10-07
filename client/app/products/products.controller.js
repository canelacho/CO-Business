'use strict';

angular.module('coAppApp')
  .controller('ProductsCtrl', function ($scope, $http, socket, Auth, User) {
    // $scope.message = 'Hello';

    $scope.productsList = [];
    $http.get('/api/providers').success(function(productsList) {
      $scope.productsList = productsList;
      socket.syncUpdates('product', $scope.productsList);

    });

    //agregar nuevo producto
    $scope.addNewProduct = {};
    $scope.addNewProduct = function(form) {
      $http.post('/api/products', {
        _id: $scope.newProduct.codigo,
        desc: $scope.newProduct.desc,
        tipo: $scope.newProduct.tipo,
        presMay: $scope.newProduct.presMay,
        conver: $scope.newProduct.conver,
        unit: $scope.newProduct.unit,
        min: $scope.newProduct.min,
        max: $scope.newProduct.max,
        cost: $scope.newProduct.cost
      }),
      $scope.addNewProduct = '';
      // $location.path('/productView', newProduct); //esto es prueba
    }

  });
