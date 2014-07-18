'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
angular.module('luckyApp.directives', []).
  directive('luckySlider', [function() {
	return{
	  restrict: 'E',
	  templateUrl: 'templates/slider.html',
	  controller: function() {
	    this.demoSlides = [
		  {src: 'data/content_img/forslider/usa_passwordfind_com_main.jpg'},
		  {src: 'data/content_img/forslider/ufa_extremjevelary_main.jpg'},
		  {src: 'data/content_img/forslider/samui-junglegym.jpg'},
		  {src: 'data/content_img/forslider/catarina_home.jpg'},
		  {src: 'data/content_img/forslider/moscow_clock_market_news.jpg'}
		]
	  },
	  controllerAs: 'slider'
	};
  }]);
