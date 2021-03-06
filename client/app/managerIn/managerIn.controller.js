'use strict';

angular.module('coAppApp')
  .controller('ManagerInCtrl', function ($scope, $http, $cookieStore, Auth, Upload) {

    $scope.checklistTitle = 'CHECKLIST APERTURA GERENTE';
    $scope.checklistIn = [
                          { step: 1, action: 'ENCENDIDO DE LUCES', info: 'A la apertura del local solo se deben encender las luces que est·n en medio del pasillo principal del local, dejando sin encender las que est·n a los lados (est·s lucen se encienden despuÈs de las 5:00pm).  Y luego el resto de las luces en pasillo hacia la cocina y cocina.'},
                          { step: 2, action: 'MARCADO DE ENTRADA', info: 'Al ingresar al local se debe marcar la entrada en el dispositivo junto a la oficina. Al momento de marcar la entrada todos los colaboradores deben empezar sus labores diarias.'},
                          { step: 3, action: 'LIMPIEZA EN PARTE DELANTERA', info: 'La fachada del local debe estar limpia y sin ning˙n tipo de daÒos. El pasillo y los puestos de estacionamiento frente al local deben estar limpios.'},
                          { step: 4, action: 'LIMPIEZA DE VIDRIOS', info: 'Al momento de llegar al local se debe verificar que los vidrios de la parte delantera estÈn totalmente limpios y sin marcas, tanto por fuera como por dentro. Al igual que las calcomanÌas en estos deben estar en buenas condiciones.'},
                          { step: 5, action: 'LIMPIEZA EN SALON', info: 'El piso, las mesas, sillas, sofás y papelera deben estar libre de sucios, impecables y libre de manchas. No se debe de ver con grasa ni nada parecido. Verificar rincones, debajo de las mesas, sillas y sofás. Los tv\'s de igual manera deben estar libres de polvos y las pantallas impecables. Las paredes no deben de tener ninguna marca de sucio. (Recordar que las paredes se limpian con paños secos, de lo contrario se puede dañar el papel). La papelera debe estar limpia, sin residuos de sucio por ning˙n lado y con una bolsa nueva. <strong>TODO EL SALON DEBE OLER A LIMPIO</strong>.'},
                          { step: 6, action: 'LIMPIEZA EN BAÑOS', info: 'Las paredes, pisos, inodoros, papeleras, dispensadores, espejos, lavamanos deben lucir impecables, libres de sucios y  manchas. Revisar rincones detr·s de los inodoros, adem·s revisar que los inodoros no presenten manchas por dentro ni por fuera. Las papeleras deben estar con bolsas limpias, deben oler a limpio y no presentar ning˙n tipo de macha. Los dispensadores deben estar surtidos y limpios. <strong>RECORDAR QUE LOS BA—OS DEBEN PERMANECER LIMPIOS DURANTE TODO EL DIA.</strong>'},
                          { step: 7, action: 'LIMPIEZA EN COCINA', info: 'El piso y las paredes deben estar limpios, libres de manchas y residuos.  Revisar paredes detr·s de las neveras y por encima de los bordes de los azulejos. Verificar piso detr·s de la plancha,  debajo del lavaplatos, debajo de todas las estaciones y neveras, ya que se acumula mucho sucio y grasa en esas zonas. <strong>TODOS</strong> los utensilios deben estar lavados, pulcros y ubicados en su respectivo puesto. La m·quina de te debe estar limpia en todas sus partes y piezas, el pl·stico debe lucir impecable, trasparente y libre de hongos. Solo debe de haber un envase con tÈ y el otro sin nada. <strong>NO PUEDE HABER NINGUN UTENCILIO FUERA DE SU LUGAR NI SUCIO</strong>.'},
                          { step: 8, action: 'PLANCHAS Y MESAS DE ACERO', info: 'Todas las piezas de acero inoxidable deben <strong>BRILLAR</strong> por la limpieza que se les da con productos para acero inoxidable.  Las planchas no deben presentar ninguna acumulaciÛn de grasas en ning˙n ·rea y deben estar impecables. Todas las mesas deben estar despejadas y limpias. El lavaplatos debe estar limpio y despejado, tanto por fuera como por dentro.'},
                          { step: 9, action: 'LIMPIEZA EN NEVERAS Y CONGELADOR', info: 'La nevera y el congelador deben estar ordenadas (nada suelto ni roto) y limpia por todas partes, tanto por fuera como por dentro. Verificar que no se est· derramando ning˙n producto y todo estÈ debidamente almacenado. En el caso de la nevera de Coca-Cola verificar que esté surtida y que todos los productos estÈn en orden y la etiqueta de la marca de todos los productos mirando hacia enfrente. <strong>NO PUEDE HABER NINGUN PRODUCTO QUE NO SEA BEBIDAS DEL LOCAL EN LA NEVERA</strong>.'},
                          { step: 10, action: 'PAPELERA, COOLERS Y GOMAS DE SEGURIDAD LIMPIOS', info: 'Todos estos se deben llevar a la parte de atr·s para ser lavados con agua y jabÛn. <strong>NO</strong> debe quedar ning˙n tipo de grasa ni sucio en ellos.  Luego ser guardados en sus respectivos lugares.'},
                          { step: 11, action: 'LIMPIEZA DEPOSITO', info: 'Este debe estar totalmente ordenado, nada puede estar fuera de sus cajas o envase respectivo, ning˙n producto puede estar abierto. El ·rea debe estar totalmente limpia. <strong>NO PUEDE HABER NINGUN PRODUCTO EN EL PISO, TODO DEBE ESTAR SOBRE LOS ANAQUELES</strong>.'},
                          { step: 12, action: 'PARTE TRASERA LIMPIA', info: 'La parte de atr·s debe estar libre de escombros y olores. No puede haber ning˙n envase, producto o material en esa ·rea (solo equipo de limpieza). No puedo haber ning˙n tipo de acumulaciÛn de agua ni sucio. <strong>RECUERDE</strong> colocar una tapita de cloro a la trampa de grasa.'},
                          { step: 13, action: 'LA BARRA', info: 'El tope de la barra debe estar limpio y libre de manchas. La parte de abajo debe estar limpia, ordenada y surtida. El microondas y papelera limpios y en su lugar. Los aparatos que poseen los n˙meros limpios y carg·ndose en la base. Los frascos y envases de picante deben estar limpios y ordenados. <strong>STOCK MINIMO:</strong> Se debe cumplir con el stock mÌnimo de productos mencionados en la hoja de controles de inventario ubicado en el depósito.'},
                          { step: 14, action: 'APERTURA DE CAJA', info: '<strong>VERIFICAR</strong> que las dos fechas en el monitor son la mima (en la parte inferior del monitor aparecen dos fechas que una es el dÌa del sistema y el otro del dÌa que se deberÌa estar facturando) si las fechas no coinciden hay que aperturar y hacer <strong>FIN DE DIA</strong> hasta que las dos fechas coincidan. Para entrar en sistema se debe ingresar con la clave de <strong>GERENTE</strong> ir a funciones, asignaciÛn de gavetas, asignar gaveta a cajero temporal, contar el dinero que se est· colocando como inicio de caja, cerrar la caja y salir de la sesión. Luego entrar como cajero temporal, contar el dinero y cerrar la gaveta (se debe contar con el cambio suficiente para trabajar durante el dÌa). Una vez aperturada  la caja se debe verificar que el punto del banco este encendido y con rollo suficiente al igual que la impresora fiscal y de comandas en la cocina.'},
                          { step: 15, action: 'ENCENDIDO DE TV\'S', info: 'Los tv\'s del salón se deben encender en un canal de m˙sica (578 MTV  o 23 +23) al volumen adecuado (no m·s de 35). <strong>NO SE PUEDE COLOCAR OTRO CANAL A EXCEPCION  DE DEPORTES EN FECHAS ESPECIALES O QUE UN CLIENTE SOLICITE ALGUN CANAL EN ESPECIAL</strong>.  Cuando se coloca un canal diferente este NO PUEDE TENER NINGUN AUDIO, solo los canales de m˙sica pueden tener audio. Los tv\'s de los men˙s se encienden y se debe activar la función de reproducir en pendrive donde un tv reproduce una imagen y el otro otra. El encendido de los tv\'s se hacen al mismo tiempo que el aire acondicionado. (11:30am).'},
                          { step: 16, action: 'SUPERVICION PLANCHERO', info: 'Este debe notificar si hay o no cantidad suficiente de carnes descongeladas para trabajar durante el dÌa. Debe encender planchas para cocinar carnes y calentar panes para la apertura del local. Luego cumplir con el resto de sus funciones diarias. <strong>VER HOJA DE ROLES</strong>.'},
                          { step: 17, action: 'SUPERVICION ARMADOR', info: 'Este debe surtir toda su ·rea de trabajo y la de te antes de la apertura. Colocar las salsas en mesas y notificar si hay alg˙n producto que haga falta para comenzar el dÌa. <strong>VER HOJA DE ROLES</strong>.'},
                          { step: 18, action: 'SALSAS Y SERVILLETEROS', info: '<strong>TODOS</strong> los envases de salsas y servilleteros  deben estar limpios y surtidos debidamente.'},
                          { step: 19, action: 'UNIFORME Y ASEO PERSONAL', info: 'Todos los colaboradores deben tener el uniforme limpio y us·ndolo correctamente (camisa por dentro, zapatos cerrados, gorra bien colocada con su redecilla  para el pelo). El aseo personal es de suma importancia, deben tener buena presencia. (Pelo corto, barba rasurada, uÒas cortas, entre otros.).'},
                          { step: 20, action: 'ENCENDIDO DEL AIRE ACONDICIONADO', info: 'Este se debe encender justo antes de la apertura del local a los clientes (11:30am).'}
                         ];




    $scope.getCurrentUser = Auth.getCurrentUser().name;
    console.log($scope.getCurrentUser);


    $scope.newObjCheckIn = {};

    $scope.formSend = function(user) {
      $scope.newObjCheckIn = angular.copy(user);
    };

    $scope.files = [];
    $scope.$watch('$scope.file1', function () {
      var files = file1;
      console.log(files);
      //uploadFiles(files);
    });



    $scope.formData = {};
    $scope.formSend2 = function (formSend) {
      $scope.formData = formSend;

      console.log($scope.formData);
      //console.log(JSON.stringify(formData));


    };




  });
