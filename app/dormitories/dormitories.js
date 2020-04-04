'use strict';

angular.module('myApp.dormitories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dormitories', {
    templateUrl: 'dormitories/dormitories.html',
    controller: 'DormitoriesCtrl'
  });
}])

.controller('DormitoriesCtrl', ['$scope','$routeParams','$http',function($scope,$routeParams,$http) {
/*$scope.rollnumber=$routeParams.rollnumber;
$scope.employee={};
$scope.refreshPageData=function() {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:3000/students/'+$scope.rollnumber
                    }).then(function successCallback(response) {
                        $scope.employee = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });

}

$scope.update=function(){
            
            var url = 'http://localhost:3000/students/'+$scope.rollnumber, data = $scope.employee,
            config='contenttype';

$http.put(url, data, config).then(function (response) {

// This function handles success

}).then(function successCallback(response) {
                       // $scope.employee = response.data ;
                        alert('student info updated');
                        window.location.href="www.google.com"

                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
  ;
                }
                $scope.create=function(){
            
            var url = 'http://localhost:3000/students', data = $scope.employee,
            config='contenttype';

$http.post(url, data, config).then(function (response) {

// This function handles success

}).then(function successCallback(response) {
                        //$scope.employee = response.data ;
                        alert('student info added');
                        window.location.href="#!/view1"

                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
                }
                $scope.delete=function() {
                    $http({
                        method : 'DELETE',
                        url : 'http://localhost:3000/students/'+$scope.rollnumber
                    }).then(function successCallback(response) {
                        $scope.employee = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });

}

$scope.refreshPageData();*/

}]);