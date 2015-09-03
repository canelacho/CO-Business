'use strict';

angular.module('coAppApp')
  .controller('ManagerOutReportCtrl', function ($scope) {
    $scope.message = 'Hello';

   $scope.years = [2015,2016,2017,2018,2019,2020];

   $scope.months = [
	    {
    		'id' :1,
    		'name' : 'Enero'
    	},
    	{
    		'id' :2,
    		'name' : 'Febrero'
    	},
    	{
    		'id' :3,
    		'name' : 'Marzo'
    	},
    	{
    		'id' :4,
    		'name' : 'Abril'
    	},
    	{
    		'id' :5,
    		'name' : 'Mayo'
    	},
    	{
    		'id' :6,
    		'name' : 'Junio'
    	},
    	{
    		'id' :7,
    		'name' : 'Julio'
    	},
    	{
    		'id' :8,
    		'name' : 'Agosto'
    	},
    	{
    		'id' :9,
    		'name' : 'Septiembre'
    	},
    	{
    		'id' :10,
    		'name' : 'Octubre'
    	},
    	{
    		'id' :11,
    		'name' : 'Noviembre'
    	},
    	{
    		'id' :12,
    		'name' : 'Diciembre'
    	}
    ];

    // Set date now automatic
    var FechaActual = new Date();
    var mesActual = FechaActual.getMonth() + 1;
    var anoActual = FechaActual.getFullYear();
    // console.log(mesActual, anoActual);
    $scope.month = mesActual;
    $scope.year = anoActual;

    // Load modal view selected
    var incidencia = true;
    $scope.test = function(valor){
      console.log(valor);

      if ($scope.dbExample[valor].actividad){
        incidencia = true;
      } else {
        incidencia = false;
      }
      console.log(incidencia);

      $scope.fechaCheck = $scope.dbExample[valor].fecha;
      $scope.autorCheck = $scope.dbExample[valor].responsable;
      $scope.muestraValor = $scope.dbExample[valor].detalle.detalle1;
      $scope.incidencia = incidencia;

    };


    $scope.dbExample = [
    {
			fecha:'03-08-2014 11:34',
			responsable:'Alejandro',
			actividad:false,
			detalle: {
				detalle1:'La papelera fue encontrada en mal estado ',
				detalle2:'El TV no esta sintonizando canales correctamente',
				detalle13:'La puerta del baño fue pateada por un cliente'
			  }
		},
    {
			fecha:'02-08-2014 11:34',
			responsable:'Maribel',
			actividad:true,
			detalle: {
        detalle1:'La papelera fue encontrada en mal estado ',
				detalle2:'El TV no esta sintonizando canales correctamente',
				detalle13:'La puerta del baño fue pateada por un cliente'
			  }
     },
     {
 			fecha:'03-08-2014 11:34',
 			responsable:'Alejandro',
 			actividad:false,
 			detalle: {
 				detalle1:'La papelera fue encontrada en mal estado ',
 				detalle2:'El TV no esta sintonizando canales correctamente',
 				detalle13:'La puerta del baño fue pateada por un cliente'
 			  }
 		},
     {
 			fecha:'02-08-2014 11:34',
 			responsable:'Maribel',
 			actividad:true,
 			detalle: {
         detalle1:'La papelera fue encontrada en mal estado ',
 				detalle2:'El TV no esta sintonizando canales correctamente',
 				detalle13:'La puerta del baño fue pateada por un cliente'
 			  }
      },
      {
  			fecha:'02-08-2014 11:34',
  			responsable:'Maribel',
  			actividad:true,
  			detalle: {
          detalle1:'La papelera fue encontrada en mal estado ',
  				detalle2:'El TV no esta sintonizando canales correctamente',
  				detalle13:'La puerta del baño fue pateada por un cliente'
  			  }
       },
       {
   			fecha:'03-08-2014 11:34',
   			responsable:'Alejandro',
   			actividad:false,
   			detalle: {
   				detalle1:'La papelera fue encontrada en mal estado ',
   				detalle2:'El TV no esta sintonizando canales correctamente',
   				detalle13:'La puerta del baño fue pateada por un cliente'
   			  }
   		},
    ];

  });
