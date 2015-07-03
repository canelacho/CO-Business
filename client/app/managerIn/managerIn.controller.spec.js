'use strict';

describe('Controller: ManagerInCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ManagerInCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerInCtrl = $controller('ManagerInCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
