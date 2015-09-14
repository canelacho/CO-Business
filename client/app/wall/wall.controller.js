'use strict';

angular.module('coAppApp')
  .controller('WallCtrl', function ($scope) {
    $scope.message = 'Hello';




var arrMensajes = [{pos:1,msg:'Nada sobre esta tierra puede detener al hombre que posee la correcta actitud mental para lograr su meta. Nada sobre esta tierra puede ayudar al hombre con la incorrecta actitud mental.'},
                {pos:2,msg:'La confianza en sí mismo es el primer secreto del éxito.'},
                {pos:3,msg:'Un hombre inteligente no es el que tiene muchas ideas, sino el que sabe sacar provecho de las pocas que tiene.'},
                {pos:4,msg:'Los chinos usan dos pinceladas para escribir la palabra crisis. Una significa peligro y la otra significa oportunidad, por lo tanto en medio de una crisis, mantente atento al peligro sin perder de vista la oportunidad. '},
                {pos:5,msg:'El éxito no se logra sólo con cualidades especiales. Es sobre todo un trabajo de constancia, de método y de organización.'},
                {pos:6,msg:'Cuando no sabemos a qué puerto nos dirigimos, todos los vientos son desfavorables.'},
                {pos:7,msg:'Siempre tienes razón, si crees que puedes, puedes, y si crees que no puedes, no puedes. De cualquier manera tienes razón.'}
               ];

// console.log(arrMensajes.length);
$scope.txtMensajePositivismo = arrMensajes[Math.floor((Math.random()*(arrMensajes.length))+1)].msg;

});
