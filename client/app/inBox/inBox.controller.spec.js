'use strict';

describe('Controller: InBoxCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var InBoxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InBoxCtrl = $controller('InBoxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
