'use strict';

angular.module('myApp.transport', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/transport', {
    templateUrl: 'transport/transport.html',
    controller: 'TransportCtrl'
  });
}])

.controller('TransportCtrl', ['$scope',function($scope) {
 /* $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}*/



}]);