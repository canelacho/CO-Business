'use strict';

describe('Controller: ClosingStatementCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ClosingStatementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClosingStatementCtrl = $controller('ClosingStatementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
