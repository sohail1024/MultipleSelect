'use strict';

angular.module('myApp.Welcome_Page', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Welcome_Page', {
    templateUrl: 'Welcome_Page/welcomepage.html',
    controller: 'WelcomePageCtrl'
  });
}])

.controller('WelcomePageCtrl', ['$scope',function($scope) {
 /* $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}*/


}]);