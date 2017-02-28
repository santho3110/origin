'use strict';
var appRoute = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'appCtrl'
        })

        // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'templates/home-list.html',
        controller: 'nestCtrl'
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
}];