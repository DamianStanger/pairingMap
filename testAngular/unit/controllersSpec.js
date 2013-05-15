/* global chai, sinon, pairsController */
'use strict';


describe('PairsController', function(){
  var expect = chai.expect,
    scope,
    pairingServiceMock;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    pairingServiceMock = {getPairs:sinon.stub().returns(42)};
    $controller(pairsController, {$scope: scope, pairingService: pairingServiceMock});
  }));

  describe('scope pairs', function() {
    it('should contain a list of developers', function() {
      expect(scope.pairs).to.equal(42);
    });
  });
});

