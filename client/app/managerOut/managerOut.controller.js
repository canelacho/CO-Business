'use strict';

angular.module('coAppApp')
  .controller('ManagerOutCtrl', function ($scope, $http) {

    $scope.checklistTitle = 'CHECKLIST CIERRE GERENTE';
    $scope.checklistOut = [
    { step: 1, action: "CIERRE PUERTA PRINCIPAL",
    info: "A la hora  de cierre del local (+11:00pm) se debe cerrar la puerta principal, dejando las llaves pegadas en la puerta en caso de que alguien quiera salir y al entrar la vuelva a cerrar. Si al momento de cerrar existen personas en el establecimiento se puede cerrar la puerta principal y se debe estar pendiente para que cada vez que quiera salir las personas se les abra y se cierre de nuevo el local."},
    { step: 2, action: "APAGAR AIRE ACONDICIONADO",
    info: "Una vez cerrada la puerta principal se debe apagar el aire acondicionado. (Si hay clientes apagar después de la salida del último cliente o a más tardar las 12 pm)."},
    { step: 3, action: "APAGAR TV'S",
    info: "Los televisores del menú se deben apagar al cerrar la puerta del local. (Eso indica que estamos cerrados a las personas que llegan después de la hora de cierre del local). Los televisores del salón se deben apagar uno de ellos al momento de cerrar la puerta y el otro al momento de cerrar el local. (Si hay clientes en el salón apagar el que no estén viendo)."},
    { step: 4, action: "APAGAR LUCES SALON",
    info: "Se deben apagar las luces del salón menos las centrales. Esto en caso de no haber ningún cliente en el salón o al momento de retirarse el último cliente. <strong>RECORDAR QUE LOS ROLES DE CADA COLABORADOR PUEDEN COMENZARSE A REALIZAR DESPUES DE LAS 10:00PM SIN ALTERAR EL DESPACHO DE PRODUCTOS A LOS CLIENTES</strong>."},
    { step: 5, action: "SUPERVICION PLANCHERO",
    info: "Este debe notificar si hay  o no cantidad suficiente de carnes descongeladas para trabajar el día siguiente o sacar la cantidad de carnes necesarias a descongelar para el día siguiente. Es muy importante la limpieza de las planchas, ya que en ella se concentran mucha grasa al igual que las paredes y piso aledaños a estas. Deben usar los productos y utensilios adecuados para la limpieza de su área. VER HOJA DE ROLES."},
    { step: 6, action: "SUPERVICION ARMADOR",
    info: "Este debe realizar el surtido de las salsas bajo las normas establecidas. Guardar todo en su respectivo lugar y dejar toda su área impecable.  VER HOJA DE ROLES."},
    { step: 7, action: "SUPERVISION AREA DE TE",
    info: "Este debe guardar y surtir todo debidamente al igual que limpiar detalladamente toda su área y en especial el piso de la cocina. VER HOJA DE ROLES."},
    { step: 8, action: "SUPERVISION LIMPIEZA SALON",
    info: "Este debe limpiar muy bien los baños y dejar el salón limpio. TODO debe quedar impecable y ordenado en el salón. VER HOJA DE ROLES."},
    { step: 9, action: "CIERRE DE CAJA",
    info: "Se debe imprimir el reporte Z, luego hacer el corte (verificar que cuadre la caja) y por ultimo realizar el fin de día. A su vez se debe imprimir el cierre de las tarjetas. Ninguno de los dos equipos se apaga."},
    { step: 10, action: "LIMPIEZA BARRA",
    info: "Limpiar toda la barra con desengrasante. Pasar trapo húmedo a equipos de facturación. Limpiar microondas.  Dejar todos los envases de picantes limpios y en su lugar. Ordenar y limpiar debajo de la barra."},
    { step: 11, action: "ROTACION, LIMPIEZA Y SURTIDO DE SALSAS Y SERVILLETEROS",
    info: "TODOS los envases de salsas deben estar surtidos. Se debe tener claro el proceso adecuado para surtir las salsas. REVISAR MANUAL DE PROCEDIMIENTOS. Los servilleteros debidamente surtidos, limpios y colocados en su lugar."},
    { step: 12, action: "PAPELERA, COOLERS Y GOMAS DE SEGURIDAD LIMPIOS",
    info: "Todos estos se deben llevar a la parte de atrás para ser lavados con agua y jabón. NO debe quedar ningún tipo de grasa ni sucio en ellos.  Luego ser guardados en sus respectivos lugares."},
    { step: 13, action: "ALMACENAMIENTO DE LOS PRODUCTOS ADECUADAMENTE",
    info: "Verificar que todos los productos del local estén almacenados en sus envases y sin ningún tipo de daño que genere el deterioro de los mismo, a su vez que estén almacenados bajo la temperatura adecuada (principalmente los panes, carnes y salsas). RECUERDE que el mal almacenamiento de un producto puede generar pérdidas de dinero."},
    { step: 14, action: "PARTE TRASERA LIMPIA",
    info: "La parte de atrás debe estar libre de escombros y olores. No puede haber ningún envase, producto o material en esa área (solo equipo de limpieza). No puedo haber ningún tipo de acumulación de agua ni sucio. RECUERDE colocar una tapita de cloro a la trampa de grasa."},
    { step: 15, action: "LIMPIEZA DEPÓSITO",
    info: "Este debe estar totalmente ordenado, nada puede estar fuera de sus cajas o envase respectivo, ningún producto puede estar abierto. El área debe estar totalmente limpia. NO PUEDE HABER NINGUN PRODUCTO EN EL PISO, TODO DEBE ESTAR SOBRE LOS ANAQUELES."},
    { step: 16, action: "LIMPIEZA PLANCHAS, MESAS Y LAVAPLATOS",
    info: "Todos los equipos de acero inoxidable se deben limpiar primero con un trapo medio húmedo para remover la grasa y el sucio para luego pasar sobre ellas un trapo seco con productos para acero inoxidable. (Este producto le da brillo al material).  Se entiende por equipos de acero inoxidable: panchas, paredes detrás de las planchas, campana, mesas de trabajo, lavaplatos. VERIFICAR que no quede ningún residuo de sucio debajo de las planchas ni en la parte de debajo de las mesas de trabajo."},
    { step: 17, action: "LIMPIEZA EN COCINA",
    info: "El piso y las paredes deben estar limpios, libres de manchas y residuos.  Revisar paredes detrás de las neveras y por encima de los bordes de los azulejos. Verificar piso detrás de la plancha,  debajo del lavaplatos, debajo de todas las estaciones y neveras, ya que se acumula mucho sucio y grasa en esas zonas. TODOS los utensilios deben estar lavados, pulcros y ubicados en su respectivo puesto. La máquina de te debe estar limpia en todas sus partes y piezas, el plástico debe lucir impecable, trasparente y libre de hongos. Solo debe de haber un envase con té y el otro sin nada. NO PUEDE HABER NINGUN UTENCILIO FUERA DE SU LUGAR NI SUCIO."},
    { step: 18, action: "GAS Y PUERTA TRASERA CERRADAS",
    info: "El gas se debe cerrar todas las noche para evitar una fuga. Este se cierra bajando la válvula que se encuentra en el tubo amarillo que esta entre la campana y el lavaplatos. Antes de salir del local se debe verificar que la puerta este cerrada con llave."},
    { step: 19, action: "LIMPIEZA EN NEVERAS Y CONGELADOR",
    info: "La nevera y el congelador deben estar ordenadas (nada suelto ni roto) y limpia por todas partes, tanto por fuera como por dentro. Verificar que no se está derramando ningún producto y todo esté debidamente almacenado. En el caso de la nevera de Coca-Cola verificar que esté surtida y que todos los productos estén en orden y la etiqueta de la marca de todos los productos mirando hacia enfrente. NO PUEDE HABER NINGUN PRODUCTO QUE NO SEA BEBIDAS DEL LOCAL EN LA NEVERA."},
    { step: 20, action: "LIMPIEZA EN BAÑOS",
    info: "Las paredes, pisos, inodoros, papeleras, dispensadores, espejos, lavamanos deben lucir impecables, libres de sucios y  manchas. Revisar rincones detrás de los inodoros, además revisar que los inodoros no presenten manchas por dentro ni por fuera. Las papeleras deben estar con bolsas limpias, deben oler a limpio y no presentar ningún tipo de macha. Los dispensadores deben estar surtidos y limpios."},
    { step: 21, action: "LIMPIEZA EN SALON",
    info: "El piso, las mesas, sillas, sofás y papelera deben estar libre de sucios, impecables y libre de manchas. No se debe de ver con grasa ni nada parecido. Verificar rincones, debajo de las mesas, sillas y sofás. Los tv`s de igual manera deben estar libres de polvos y las pantallas impecables. Las paredes no deben de tener ninguna marca de sucio. (Recordar que las paredes se limpian con paños secos, de lo contrario se puede dañar el papel). La papelera debe estar limpia, sin residuos de sucio por ningún lado y con una bolsa nueva.  TODO EL SALON DEBE OLER A LIMPIO."},
    { step: 22, action: "APAGAR TODAS LAS LUCES Y EQUIPOS",
    info: "Recordar apagar todos los equipos del local a excepcion de : computadora, punto de tarjetas, neveras y  congelador, del resto todas las luces del local deben quedar comletamente apagadas."},
    { step: 23, action: "MARCAR SALIDA",
    info: "TODOS los colaboradores deben marcar su salida al momento de terminar sus labores y procedan a retirarse del local. Se les recuerda que de no marcar la salida se les descontara 30 min de su jornada de trabajo y se reconocera como hora de salida la hora de su horario regular sin contar tiempo extra."},
    { step: 24, action: "CERRAR EL LOCAL",
    info: "Se debe pasar el seguro a la puerta principal y sumado a esto colocar los dos candadosdisponibles, uno entre las arandelas y el otro entre las bases de las arandelas."}
    // { step: 25, action: "", info: ""},
    ];




        // Toggle check button with ngIf
        // $scope.checkToggle = function() {
        //   if ($scope.boolean == false) {
        //     $scope.boolean = true;
        //   } else {
        //     $scope.boolean = false;
        //   }
        // };



        $scope.formData = {};
        $scope.formData.checklistOut = $scope.checklistOut

        // $scope.newCierre = function() {
        //   angular.forEach(checklistOut, function(task, index) {
        //
        //   });
        // };




        // Schema model
        var ManagerOut = {
          	author: 'String',
          	list: [
          		{check: 'Boolean', comment: 'String', img: 'String'}
          	],
          	date: { type: Date, default: Date.now },
        };



        console.log($scope.formData.checklistOut);

  });
