/*globals pairsController*/
'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/pairs.html', controller: pairsController});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
