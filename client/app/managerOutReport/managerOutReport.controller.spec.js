'use strict';

describe('Controller: ManagerOutReportCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ManagerOutReportCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerOutReportCtrl = $controller('ManagerOutReportCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
