'use strict';

angular.module('myApp.manageOffice', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/manageOffice', {
    templateUrl: 'manageOffice/manageoffice.html',
    controller: 'ManageOfficeCtrl'
  });
}])

.controller('ManageOfficeCtrl', ['$scope',function($scope) {
 /* $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}*/


}]);