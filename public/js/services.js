'use strict';

var myAppServices = angular.module('myApp.services',  []);
myAppServices.factory('pairingService', function(){
    return new ParingServiceClass();
});


function ParingServiceClass(){
  this.getPairs = function(){
    return [["Damo", 1, 2], ["Rob", 2, 3]];
  //    return $resource('phones/:phoneId.json', {}, {
  //      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  //    });
  };
}
