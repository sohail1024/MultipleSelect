'use strict';

angular.module('myApp.studentslistrequest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studentslistrequest', {
    templateUrl: 'studentslistrequest/studentslistrequest.html',
    controller: 'StudentsListRequest'
  });
}])

.controller('StudentsListRequest', ['$scope',function($scope) {
 /* $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}*/


}]);