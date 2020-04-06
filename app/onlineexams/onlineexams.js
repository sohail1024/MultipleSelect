'use strict';

angular.module('myApp.onlineexams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/onlineexams', {
    templateUrl: 'onlineexams/onlineexams.html',
    controller: 'OnlineExams'
  });
}])

.controller('OnlineExams', ['$scope',function($scope) {
 /* $scope.employee={}

	$scope.edit=function(){
		 alert('hello'+JSON.stringify($scope.employee));
		 window.location.href="#!/view3/"+$scope.employee.rollnumber;
	}*/


}]);