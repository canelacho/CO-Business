'use strict';

describe('Controller: BalanceCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var BalanceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BalanceCtrl = $controller('BalanceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
