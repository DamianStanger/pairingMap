/* global chai, PairsController */
'use strict';


describe('PairsController', function(){
  var expect = chai.expect,
    pairsController,
    scope;

  beforeEach(function(){
    scope = {};
    pairsController = new PairsController(scope);
  });


  it('should populate the scope with a list of developers', function() {
    expect(scope.pairs).to.eql(["Damo", "Rob"]);
  });
});

