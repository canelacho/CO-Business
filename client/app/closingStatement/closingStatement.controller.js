'use strict';

angular.module('coAppApp')
  .controller('ClosingStatementCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.idKey = 12;
    $scope.fechaActual = new Date();
    $scope.totalDeclarado = 2345.43;

    var ventasTicket = 0;
    if($scope.ventasTicket === '') {
      ventasTicket = 0;
    } else {
      ventasTicket = $scope.ventasTicket;
    }

    console.log(ventasTicket);

    $scope.calculoDiferencia = $scope.totalDeclarado - ventasTicket;

    $scope.user = 'Alejandro';

    $scope.users = [
      {
        id:'0',
        name:'Alejandro',
        rol:'master'
      },
      {
        id:'1',
        name:'Daniel',
        rol:'admin'
      },
      {
        id:'2',
        name:'Maribel',
        rol:'gerente'
      },
      {
        id:'3',
        name:'Emmanuel',
        rol:'crew'
      }];

      $scope.closingStatement = [
        { step: 1, action: 'Efectivo', info: 'Registre la suma de todo el efectivo en caja. RECUERDE no sumar a este monto el fondo de caja'},
        { step: 2, action: 'Tarjeta de Debito', info: 'Registre la suma de todos los puntos de venta en lo que respecta a tarjetas de debito.'},
        { step: 3, action: 'Tarjeta de Credito', info: 'Registre la suma de todos los puntos de venta en lo que respecta a tarjetas de credito.'},
        { step: 4, action: 'Cheques', info: 'Registre la suma de todos los cheques recibidos.'},
        { step: 5, action: 'Otros', info: 'Registre la suma de todo pago no detallado anteriormente, promociones, tickets, entre otros.'},
        { step: 6, action: 'Venta en Ticket', info: 'Incluya el monto de las ventas segun el ticket impreso del Sistema de Facturacion'},
        { step: 7, action: 'Retiros', info: 'Registre la suma de todos los vales, pagos, justificaciones realizadas de retiro de dinero de caja.'},
        { step: 8, action: 'Diferencia', info: 'Muestra la diferencia entre el Monto total declarado menos el monto segun Sistema de Facturacon (Declaracion de Ventas - Ventas en Ticket).'},
        { step: 9, action: 'Observacion', info: 'Muestra la diferencia entre la declaracion de cierre y las ventas segun sistema menos los ajustes.'}
        // { item: 'hola', description: ''},
      ];

  });
