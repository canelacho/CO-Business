'use strict';

angular.module('coAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Manager In',
      'link': '/managerIn'
    },
    {
      'title': 'Manager Out',
      'link': '/managerOut'
    }

    // submenu: [
    //     {
    //       'title': 'Manager In',
    //       'link': '/managerIn'
    //     },
    //     {
    //       'title': 'Manager Out',
    //       'link': '/managerOut'
    //     }
    //   ];
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
