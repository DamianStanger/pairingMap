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


  describe('scope pairs', function() {
    it('should contain a list of developers', function() {
      expect(scope.pairs).to.have.length(2);
      expect(scope.pairs.map(function(item){return item[0];})).to.eql(["Damo", "Rob"]);
    });

    it('should contain commits per developer pair', function() {
      expect(scope.pairs).to.eql([["Damo", 1, 2], ["Rob", 2, 3]]);
    });
  });



});

