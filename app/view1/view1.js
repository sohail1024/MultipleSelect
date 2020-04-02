'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
//alert("this is view1")
 $scope.employees = [];
 $scope.form = {
                    id : -1,
                    name : "",
                    age : ""
                };
 $scope.refreshPageData=function() {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:3000/students'
                    }).then(function successCallback(response) {
                        $scope.employees = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
 
                }
                $scope.delete=function(id) {
                    $http({
                        method : 'DELETE',
                        url : 'http://localhost:3000/students/'+id
                    }).then(function successCallback(response) {
                        $scope.employee = response.data ;
                        alert('student information successfully removed');
                        location.reload();

                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });

}
 $scope.refreshPageData();
}]);