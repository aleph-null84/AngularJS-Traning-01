var app = angular.module("clockApp", []);
app.controller("TimeCtrl", TimeController);

function TimeController($scope) {
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    $scope.userName = "";
        
    $scope.updateTime = function() {
        //$scope.userName = "";
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString();
    }
}