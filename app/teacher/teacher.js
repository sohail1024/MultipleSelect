'use strict';

angular.module('myApp.teacher', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teacher', {
    templateUrl: 'teacher/teacher.html',
    controller: 'TeacherCtrl'
  });
}])

.controller('TeacherCtrl', ['$scope','$http',function($scope,$http) {
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
                        url : 'http://localhost:3000/teacher'
                    }).then(function successCallback(response) {
                        $scope.employees = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
 
                }
                $scope.delete=function(id) {
                    $http({
                        method : 'DELETE',
                        url : 'http://localhost:3000/teacher/'+id
                    }).then(function successCallback(response) {
                        $scope.employee = response.data ;
                        alert('teacher information successfully removed');
                    window.location.href="#!/teacher"

                        location.reload();

                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });

}
 $scope.refreshPageData();
}]);