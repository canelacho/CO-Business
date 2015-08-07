'use strict';

describe('Controller: NotifyEventCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var NotifyEventCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotifyEventCtrl = $controller('NotifyEventCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
