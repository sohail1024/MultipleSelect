'use strict';

angular.module('myApp.editsubject', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editsubject/:id', {
    templateUrl: 'editsubject/editsubject.html',
    controller: 'EditSubjectCtrl'
  });
}])

.controller('EditSubjectCtrl', ['$scope','$routeParams','$http',function($scope,$routeParams,$http) {
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
$scope.sel = [];
$scope.sel1 = [];

/*$scope.getSelectedOptions = function()  {
$scope.sel1 = $scope.sel; 
}*/
// example callback function (selected options passed one by one)

$scope.update=function(){
            
            var url = 'http://localhost:3000/subject/'+$scope.id, data = $scope.employee,
            config='contenttype';

$http.put(url, data, config).then(function (response) {

// This function handles success

}).then(function successCallback(response) {
                       // $scope.employee = response.data ;
                        alert('subject info updated');
                        window.location.href="#!/subject"

                    }, function errorCallback(response) {
                        console.log(response.statusText);
                    });
  
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