'use strict';

describe('Controller: ReceivingNoteCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ReceivingNoteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReceivingNoteCtrl = $controller('ReceivingNoteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
