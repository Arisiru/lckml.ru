'use strict';

/* Controllers */

angular.module('luckyApp.controllers', [])
  .controller('CopyrightCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.curentYear = $filter('date')(new Date(), 'yyyy');
  }])
  .controller('PortfolioCtrl', ['$scope', '$modal', function($scope, $modal) {
    $scope.showInModal = function() {
		console.log(arguments);
		var myModal = $modal({title: 'My Title', content: 'My Content', show: true});
	}
    $scope.portfolio = [
		{
			id: 38,
			type: 'front-end',
			name: 'Password-find.com',
			link: 'http://www.password-find.com/',
			description: 'This service is designed to remove or recovery any type of passwords for MS Office documents',
			poster: 'usa_passwordfind_com_main.jpg',
			images: ['usa_passwordfind_com_step1.jpg', 'usa_passwordfind_com_step4.jpg'],
			made: ['Layout:XHTML 1.0 Strict/CSS', 'Front-end: JavaScript', 'AJAX,  JSON', 'Prepare for multi language use', 'Compatible in IE6+, Firefox, Safari, Chrome'],
			languages: ['English']
		},
		{
			id: 37,
			type: 'wordpress',
			name: 'extreme jewellery',
			link: 'http://extremejewelry.ru/',
			description: 'Blog about extreme and jewellery shop',
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
			id: 35,
			type: 'rtm',
			name: 'website for photoartist',
			description: 'Training camp in Thailand',
			poster: 'catarina_home.jpg',
			images: ['catarina_about.jpg', 'catarina_contacts.jpg', 'catarina_portfolio.jpg'],
			made: ['Design', 'PHP5(CodeIgniter framework) + MySQL', 'Layout:HTML5/CSS3 + jQuery', 'Compatible in IE8+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},
		{
			id: 34,
			type: 'front-end',
			name: 'clock market',
			description: 'Training camp in Thailand',
			poster: 'moscow_clock_market_news.jpg',
			images: ['moscow_clock_market_watch.jpg'],
			made: ['Layout:XHTML 1.0 Strict/CSS + PIE + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},
		{
			id: 33,
			type: 'front-end',
			name: 'Astralum',
			description: 'LineAge 2 game portal',
			poster: 'la1.jpg',
			made: ['Layout:XHTML 1.0 Strict/CSS + PIE + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},
		{
			id: 32,
			type: 'rtm',
			name: 'IQ Baby',
			link: 'http://iqbaby.ru/',
			description: 'Toy store, ecommerce site build from scratch',
			poster: 'moscow_babyshop_catalog.jpg',
			made: ['PHP5(CodeIgniter framework) + MySQL', 'Layout:HTML5/CSS3 + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},
		{
			id: 31,
			type: 'wordpress',
			name: 'Master group',
			description: 'Site for construction company',
			poster: 'ufa_mastergroup_main.jpg',
			images: ['ufa_mastergroup_abot.jpg'],
			made: ['Design', 'Custom WordPress\'s theme', 'Custom post types/taxonomy', 'Layout:HTML5/CSS3 + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},
		{
			id: 27,
			type: 'rtm',
			name: 'Hesiod',
			description: 'LineAge 2 game portal',
			poster: 'la2.jpg',
			made: ['Layout:XHTML 1.0 Strict/CSS + jQuery', 'Compatible in IE6+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},
		{
			id: 26,
			type: 'wordpress',
			name: 'Baby Jog',
			link: 'http://babyjog.ru/',
			description: 'Baby strollers shop',
			poster: 'moscow_babyjoger_catalog.jpg',
			made: ['Design', 'Layout:XHTML5/CSS3', 'Light Shop based on Custom post types/taxonomy', 'Custom WordPress\'s theme', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},		
		{
			id: 24,
			type: 'rtm',
			name: 'Russ\'',
			description: 'customs maintenance company',
			poster: 'moscow-customcompany.jpg',
			made: ['PHP5(CodeIgniter framework) + MySQL', 'Layout:HTML5/CSS3 + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},		
		{
			id: 23,
			type: 'wordpress',
			name: 'Overborder',
			description: 'Blog about Thailand and natural cosmetics shop',
			poster: 'samui-blog-shop-main.jpg',
			images: ['samui-blog-shop-catalog.jpg'],
			made: ['Design', 'Custom WordPress\'s theme', 'Custom post types/taxonomy', 'Layout:HTML5/CSS3 + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 21,
			type: 'rtm',
			name: 'Metras',
			description: 'Furniture Store',
			poster: 'ufa_furnitureshopmetras.jpg',
			made: ['Design', 'PHP5(CodeIgniter framework) + MySQL', 'Layout:XHTML 1.0 Strict/CSS + PIE + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 20,
			type: 'front-end',
			name: 'Goverment website',
			description: 'Ministry of Economic Development of the Karachai-Cherkess Republic',
			poster: 'cherkessk_min_ek_rzv.jpg',
			made: ['Layout:XHTML 1.0 Strict/CSS + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 4,
			type: 'rtm',
			name: 'Karate kontakt',
			description: 'Club\'s website for Karate Kyokushin team',
			poster: 'ufa_karatekontakt.jpg',
			made: ['Design', 'PHP5(CodeIgniter framework) + MySQL', 'Layout:XHTML 1.0 Strict/CSS + PIE + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 3,
			type: 'rtm',
			name: 'extreme jewellery',
			link: 'http://extremejewelry.ru/',
			description: 'Blog about extreme and jewellery shop',
			poster: 'ufa_extremjevelary.jpg',
			made: ['Design', 'Layout:XHTML5/CSS3', 'Light Shop based on Custom post types/taxonomy', 'Custom WordPress\'s theme', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 2,
			type: 'front-end',
			name: 'Wedding services agency',
			description: '',
			poster: 'ivanovo-wedindservice.jpg',
			made: ['Layout:XHTML5/CSS3 + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		},	
		{
			id: 1,
			type: 'rtm',
			name: 'Website for kindergarten',
			description: '',
			poster: 'ufa_ds_sosenki.jpg',
			made: ['Design', 'PHP5(CodeIgniter framework) + MySQL', 'Layout:XHTML 1.0 Strict/CSS + PIE + jQuery', 'Compatible in IE7+, Firefox, Safari, Chrome'],
			languages: ['Russian']
		}
	];

	
  }]);
