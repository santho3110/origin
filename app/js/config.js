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