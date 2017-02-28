
var appNestedCtrl =  ['$scope', function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }];
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
var appCtrl = ['$scope','$http', function($scope,$http){
	$scope.name = 'Sandy';

	$http.get("http://localhost:8080/myapp/getProduc/8?query=god").then(
		function(response){
			JSON.stringify(response);
		}
		);
}];
var app = angular.module("app", ['ui.router']);

app.config(appRoute);

app.controller("appCtrl", appCtrl);
app.controller("nestCtrl", appNestedCtrl);

app.service('hexafy', function(){
	this.myFunc = function(x){
		return x.toString(16);
	}
});

app.filter('hexaFormat', ['hexafy', function(hexafy){
	return function(x){
		return hexafy.myFunc(x);
	}
}]);
console.log('My  second log');