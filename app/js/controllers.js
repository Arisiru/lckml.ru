'use strict';

/* Controllers */

angular.module('luckyApp.controllers', [])
  .controller('CopyrightCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.curentYear = $filter('date')(new Date(), 'yyyy');
  }])
  .controller('PortfolioCtrl', ['$scope', function($scope) {
    $scope.portfolio = {
		{
			id: 38,
			type: 'front-end',
			name: 'Password-find.com',
			description: 'This service is designed to remove or recovery any type of passwords for MS Office documents <a href="http://www.password-find.com/">http://www.password-find.com/</a>',
			poster: 'usa_passwordfind_com_main.jpg',
			images: ['usa_passwordfind_com_step1.jpg', 'usa_passwordfind_com_step4.jpg'],
			made: ['Layout:XHTML 1.0 Strict/CSS', 'Front-end: JavaScript', 'AJAX,  JSON', 'Prepare for multi language use', 'Compatible in IE6+, Firefox, Safari, Chrome'],
			languages: ['English']
		},
		{
			id: 37,
			type: 'wordpress',
			name: 'extreme jewellery',
			description: 'Blog about extreme and jewellery shop, <a href="http://extremejewelry.ru/">http://extremejewelry.ru/</a>',
			poster: 'ufa_extremjevelary_catalog.jpg',
			images: ['ufa_extremjevelary_blog.jpg', 'ufa_extremjevelary_item.jpg','ufa_extremjevelary_main.jpg'],
			made: ['Design', 'Layout:XHTML5/CSS3', 'Light Shop based on Custom post types/taxonomy', 'Custom WordPress\'s theme', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 36,
			type: 'wordpress',
			name: 'Jungle Gym Samui',
			description: 'Training camp in Thailand</a>',
			poster: 'samui-junglegym.jpg',
			images: ['samui-junglegym-page.jpg', 'samui-junglegym-prices.jpg'],
			made: ['Design', 'Layout:XHTML5/CSS3', 'Custom post types/taxonomy', 'Custom, Multi language WordPress\'s theme', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['English','Russian']
		},
		{
			id: 36,
			type: 'wordpress',
			name: 'Jungle Gym Samui',
			description: 'Training camp in Thailand</a>',
			poster: 'samui-junglegym.jpg',
			images: ['samui-junglegym-page.jpg', 'samui-junglegym-prices.jpg'],
			made: ['Design', 'Layout:XHTML5/CSS3', 'Custom post types/taxonomy', 'Custom, Multi language WordPress\'s theme', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['English','Russian']
		},
	];


	
  }]);
  
