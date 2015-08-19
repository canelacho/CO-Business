'use strict';

describe('Controller: ProvidersCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ProvidersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProvidersCtrl = $controller('ProvidersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
