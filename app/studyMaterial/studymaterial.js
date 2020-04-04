'use strict';

angular.module('myApp.studyMaterial', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studyMaterial', {
    templateUrl: 'studyMaterial/studymaterial.html',
    controller: 'StudyMaterialCtrl'
  });
}])

.controller('StudyMaterialCtrl', ['$scope',function($scope) {
 /* $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}*/


}]);