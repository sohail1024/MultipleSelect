'use strict';

angular.module('myApp.subject', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/subject', {
    templateUrl: 'subject/subject.html',
    controller: 'SubjectCtrl'
  });
}])

.controller('SubjectCtrl', ['$scope','$http',function($scope,$http) {
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
                        url : 'http://localhost:3000/subject'
                    }).then(function successCallback(response) {
                        $scope.employees = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
 
                }
                $scope.delete=function(id) {
                    $http({
                        method : 'DELETE',
                        url : 'http://localhost:3000/subject/'+id
                    }).then(function successCallback(response) {
                        $scope.employee = response.data ;
                        alert('subject information successfully removed');
                    window.location.href="#!/subject"

                        location.reload();

                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });

}
 $scope.refreshPageData();
}]);