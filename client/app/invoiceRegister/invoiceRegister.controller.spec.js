'use strict';

describe('Controller: InvoiceRegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var InvoiceRegisterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvoiceRegisterCtrl = $controller('InvoiceRegisterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
