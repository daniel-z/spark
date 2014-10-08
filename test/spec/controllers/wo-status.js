'use strict';

describe('Controller: WoStatusCtrl', function () {

  // load the controller's module
  beforeEach(module('sparkApp'));

  var WoStatusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WoStatusCtrl = $controller('WoStatusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
