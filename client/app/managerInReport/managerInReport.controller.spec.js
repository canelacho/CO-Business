'use strict';

describe('Controller: ManagerInReportCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ManagerInReportCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManagerInReportCtrl = $controller('ManagerInReportCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
