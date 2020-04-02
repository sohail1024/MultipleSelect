'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope',function($scope) {
  $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}


}]);