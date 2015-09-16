'use strict';

angular.module('coAppApp')
  .controller('ProductsCtrl', function ($scope, $http, socket, Auth, User) {
    // $scope.message = 'Hello';

    $scope.productsList = [];
    $http.get('/api/providers').success(function(productsList) {
      $scope.productsList = productsList;
      socket.syncUpdates('product', $scope.productsList);

    });

    $scope.addNewProduct = {};
    var newProduct;
    $scope.addNewProduct = function(form) {
      $http.post('/api/products', {
        codigo: $scope.newProduct.codigo,
        desc: $scope.newProduct.desc,
        type: $scope.newProduct.type,
        wholesale: $scope.newProduct.wholesale,
        conver: $scope.newProduct.conver,
        unit: $scope.newProduct.unit,
        min: $scope.newProduct.min,
        max: $scope.newProduct.max,
        cost: $scope.newProduct.cost
      }).success(function(product){
        newProduct = product;
      }),
      $scope.addNewProduct = '';
      $location.path('/productView', newProduct);
    }

  });
