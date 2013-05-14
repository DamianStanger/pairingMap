/*jshint unused:false*/
'use strict';

function PairsController($scope, $routeParams) {
  $scope.pairs1 = {
    devs:["Damo", "Rob"],
    commits:[[1,2], [3,4]]
  };

  $scope.pairs2 = {
    devs:[
      {name:"Damo", pairings:[{name:"Damo", commits:1}, {name:"Rob", commits:2}]},
      {name:"Rob", pairings:[{name:"Damo", commits:2}, {name:"Rob", commits:3}]}]
  };

  $scope.pairs2b = {
    devs:[
      {names:["Damo"], commits:1},
      {names:["Damo", "Rob"], commits:2},
      {names:["Rob"], commits:3}
    ]
  };

  $scope.pairs3 = {
    matrix:[["", "Damo", "Rob"],["Damo", 1, 2], ["Rob", 2, 3]]
  };

  $scope.pairs = [["Damo", 1, 2], ["Rob", 2, 3]];

}
//PairsController.$inject = [];