'use strict';

describe('Controller: ReportListCtrl', function () {

  // load the controller's module
  beforeEach(module('coAppApp'));

  var ReportListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportListCtrl = $controller('ReportListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
