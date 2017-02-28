var appCtrl = ['$scope','$http', function($scope,$http){
	$scope.name = 'Sandy';

	$http.get("http://localhost:8080/myapp/getProduc/8?query=god").then(
		function(response){
			JSON.stringify(response);
		}
		);
}];