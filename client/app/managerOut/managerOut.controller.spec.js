'use strict';

describe('Controller: ManagerOutCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ManagerOutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerOutCtrl = $controller('ManagerOutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
