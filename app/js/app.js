'use strict';

angular.module('luckyApp', [
  'ngRoute',
  'luckyApp.directives',
  'luckyApp.controllers'
  //'myApp.filters',
  //'myApp.services',


]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'views/home.html'});
  $routeProvider.when('/portfolio', {templateUrl: 'views/portfolio.html', controller: 'PortfolioCtrl'}); 

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
