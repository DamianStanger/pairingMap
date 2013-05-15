/*globals chai*/
'use strict';

describe('service', function() {
  var expect = chai.expect;

  beforeEach(module('myApp.services'));

  describe('pairingService', function() {

    describe('getPairs', function(){
      it('should return a list of developers', inject(function(pairingService) {
        var pairs = pairingService.getPairs();
        expect(pairs).to.have.length(2);
        expect(pairs.map(function(item){return item[0];})).to.eql(["Damo", "Rob"]);
      }));

      it('should contain commits per developer pair', inject(function(pairingService) {
        var pairs = pairingService.getPairs();
        expect(pairs).to.eql([["Damo", 1, 2], ["Rob", 2, 3]]);
      }));
    });

  });
});
