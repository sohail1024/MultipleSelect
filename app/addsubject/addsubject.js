'use strict';

angular.module('myApp.addsubject', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addsubject', {
    templateUrl: 'addsubject/addsubject.html',
    controller: 'AddSubjectCtrl'
  });
}])

.controller('AddSubjectCtrl', ['$scope','$routeParams','$http',function($scope,$routeParams,$http) {
$scope.id=$routeParams.id;
$scope.employee={};
$scope.refreshPageData=function() {
                    $http({
                        method : 'GET',
                        url : 'http://localhost:3000/subject/'+$scope.id
                    }).then(function successCallback(response) {
                        $scope.employee = response.data;
                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });

}

$scope.update=function(){
            
            var url = 'http://localhost:3000/students/'+$scope.id, data = $scope.employee,
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
            
            var url = 'http://localhost:3000/subject', data = $scope.employee,
            config='contenttype';

$http.post(url, data, config).then(function (response) {

// This function handles success

}).then(function successCallback(response) {
                        //$scope.employee = response.data ;
                        alert('subject  added');
                        window.location.href="#!/subject"

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

  $scope.gotolist=function(){

  	  alert('Do you want to go back');
  	                          window.location.href="#!/view1"


  }

$scope.refreshPageData();

}]);