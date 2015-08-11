'use strict';

angular.module('coAppApp')
  .controller('NotifyEventCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.user = "Alejandro";

    $scope.users = [
    {
      id:"0",
      name:"Alejandro",
      rol:"master"
    },
    {
      id:"1",
      name:"Daniel",
      rol:"admin"
    },
    {
      id:"2",
      name:"Maribel",
      rol:"gerente"
    },
    {
      id:"3",
      name:"Emmanuel",
      rol:"crew"
    }]


    var usersMailList = [];

    $scope.addUserMail = function(user){
      console.log($scope.users[user].name);
      usersMailList.push($scope.users[user].name);
      console.log(usersMailList);

      $scope.fullMailList =  usersMailList;

    };

  });
