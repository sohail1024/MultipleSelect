'use strict';

angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', ['$scope',function($scope) {
  $scope.employee={}

	$scope.delete=function(){
		// alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view6/"+$scope.employee.rollnumber;
	}


}]);