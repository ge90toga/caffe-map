var app = angular.module('caffeinehit', [
	'ionic',
	'caffeinehit.controllers',
	'caffeinehit.services',
	'caffeinehit.filters',
  'ngMap',
  'ngCordova'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($httpProvider) {
	$httpProvider.defaults.headers.common['Authorization'] = 'Token d1ad2534e70cd69f195cc081b7e59e79b9b4508e';
});
