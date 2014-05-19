(function(window) {
	var app = angular.module("bansri",['ngResource','ngRoute','ngAnimate']);
	
	var config=function($routeProvider)
	{
		$routeProvider.when("/",
		{
			controller:"HomeController",
			templateUrl:"/pages/home.html"
		});
		// $routeProvider.when("/home",
		// {
		// 	controller:"HomeController",
		// 	templateUrl:"/template/view/home.html"
		// });
		$routeProvider.otherwise({redirectTo:"/"});
	};
	
	app.config(config);
	app.controller(controllers);
	app.directive(directives);
	app.factory(factories);
	app.service(services);
	
} )(window); 