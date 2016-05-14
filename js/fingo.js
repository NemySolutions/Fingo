var app = angular.module("fingo", ["firebase"]);

app.controller("mainCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://fingo.firebaseio.com");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});