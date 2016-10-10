(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchItems = "potato, pancake";
  $scope.displayItemsList = function() {
    var totalItemList = splitFunction($scope.lunchItems);
    $scope.displayMessage = totalItemList;
  };
  //$scope.myMessage = "yo yo yo"
  // $scope.displayItemsList = function () {
  //   var totalItemsList = splitFunction($scope.lunchItems);
  //
  // };
// $scope.splitFunction = function () {
//   $scope.lunchItemsList = $scope.lunchItems.split(comma);
//   console.log($scope.splitFunction);
// };
};

function splitFunction(string) {
  var totalStringCount = string.split(',');
  if (totalStringCount <= 3){
    return "Enough";
  }
  else if (totalStringCount >= 4) {
    return "Too much";
  }
};










})();
