'use strict';

angular.module('coAppApp')
  .controller('NotifyEventCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.user = "Alejandro";

    $scope.users = [
    {
      id:"1",
      name:"Alejandro",
      rol:"master"
    },
    {
      id:"2",
      name:"Daniel",
      rol:"admin"
    },
    {
      id:"3",
      name:"Maribel",
      rol:"gerente"
    },
    {
      id:"3",
      name:"Maribel",
      rol:"crew"
    }]




  });
