'use strict';

describe('Controller: ProductsReportCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ProductsReportCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsReportCtrl = $controller('ProductsReportCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
