'use strict';

angular.module('coAppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      // {
      //   'title': 'Home',
      //   'link': '/'
      // },
      {
        'title': 'Inicio',
        'link': '/wall'
      },
      {
        'title': 'Productos',
        'link': '/products'
      },
      {
        'title': 'Proveedores',
        'link': '/providers'
      },
      {
        'title': 'Registrar Facturas',
        'link': '/invoiceRegister'
      },
      {
        'title': 'Cierre de Sesion',
        'link': '/closingStatement'
      },
      {
        'title': 'Nota Recepcion',
        'link': '/receivingNote'
      },
      {
        'title': 'Manager In',
        'link': '/managerIn'
      },
      {
        'title': 'Manager Out',
        'link': '/managerOut'
      },
      {
        'title': 'Reportes',
        'link': '/reportList'
      },
      {
        'title': 'Listado Manager Out',
        'link': '/managerOutReport'
      },
      {
        'title': 'Balance',
        'link': '/balance'
      },
      {
        'title': 'Notificaciones',
        'link': '/notifyEvent'
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
