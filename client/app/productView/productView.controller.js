'use strict';

angular.module('coAppApp')
  .controller('ProductViewCtrl', function ($scope, $http, Auth, User) {
    // $scope.message = 'Hello';
    var newProduct = 'producto';

    $scope.newProduct = newProduct;
    console.log($scope.newProduct);


    $scope.product;
    $http.get('/api/product/:id').success(function(product) {
      $scope.product = product;
    });

  });
