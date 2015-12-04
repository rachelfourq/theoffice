var app = angular.module("TheOfficeApp", ['OfficeCtrls', 'ngRoute']);

app.config([
	"$routeProvider",
	"$locationProvider",
	function($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			controller: "OfficeCtrl",
			templateUrl: "./views/index.html"
		}).when("/about", {
			templateUrl: "./views/about.html"
		}).when("/bestmoments", {
			templateUrl: "./views/bestmoments.html"
		}).when("/cast", {
			templateUrl: "./views/cast.html"
		}).otherwise({
			templateUrl: "./views/404.html"
		});
		$locationProvider.html5Mode(false).hashPrefix("!")
	}
]);