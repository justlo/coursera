(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)
LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.inputText = "";
    $scope.outputMessage = "";
    //var myString = $scope.inputText;
    //console.log(myString)

    $scope.clickOutput = function () {
        $scope.outputMessage = splitFunction($scope.inputText);

    }


  function splitFunction(string) {
    if (string == ""){
      return "Please enter data first"
    }
    var re = /\s*,\s*/;
    var totalStrings = string.split(re)
    console.log(totalStrings);
    console.log(totalStrings.length);
    for (var i = 0; i < totalStrings.length; i++) {
      //console.log("i: " + i + "stringEl: " + totalStrings[i])
      if (totalStrings[i] == "") {
        return "You have an empty item!"
      }
      //console.log(i)
    }

    if (totalStrings.length <= 3){
      return "Enjoy!";
    }
    else if (totalStrings.length > 3) {
      return "Too much!";
    }

  }
};




})();
