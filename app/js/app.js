'use strict';

angular.module('luckyApp', [
  'ngRoute',
  'luckyApp.directives',
  //'myApp.filters',
  //'myApp.services',

  //'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'views/home.html'}); //, controller: 'MyCtrl1'

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
