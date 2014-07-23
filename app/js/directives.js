'use strict';

/* Directives */

angular.module('luckyApp.directives', []).
  directive('luckySlider', ['$timeout', function($timeout) {
  return{
	  restrict: 'E',
	  templateUrl: 'templates/slider.html',
	  link: function postLink(scope, element, attrs) {

		scope.demoSlides = [
		  {src: 'data/content_img/forslider/usa_passwordfind_com_main.jpg'},
		  {src: 'data/content_img/forslider/ufa_extremjevelary_main.jpg'},
		  {src: 'data/content_img/forslider/samui-junglegym.jpg'},
		  {src: 'data/content_img/forslider/catarina_home.jpg'},
		  {src: 'data/content_img/forslider/moscow_clock_market_news.jpg'}
		];
	    scope.backToRotate = function(distination) {
		  sliderTimer = $timeout(rotate, showTime);
		};
		scope.pause = function() {
		  pause();
		};
	    scope.rotate = function(distination) {
		  rotate(distination);
		};
		
		var showTime = 3000;
		var speed = 400;
		var sliderTimer = $timeout(rotate, showTime);
     	var colection = element[0].children[0].children[0].children[0];
		var rotating = false;
		
		function pause() {
		  $timeout.cancel(sliderTimer);
		}
		
		function rotate(distination) {
		  if (rotating)
		    return false;
	      
		  rotating = true;
		
		  if (sliderTimer) {
		    $timeout.cancel(sliderTimer);
		  }
		
		  if(!distination){
		    var slide = colection.children[0];
		    jQuery(slide).animate({width: "hide"}, speed, 'linear', function() {
		      jQuery(slide).appendTo(jQuery(colection)).show(); 
			});
		  } 
		  else {
			var slide = colection.children[colection.children.length - 1];
			jQuery(slide).hide().prependTo(
			  jQuery(colection)).animate({width: "show"}, speed, 'linear');
		  }
		
		  sliderTimer = $timeout(rotate, showTime);
		  rotating = false;
		}
	  }
  };
  }]);
