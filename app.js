var app = angular.module("app", []);

app.controller("test", function($scope){
    $scope.dummy = function(){
        alert("hitme");
    }    
})