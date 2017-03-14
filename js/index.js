var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {

  // sorting vars
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order

  // when editing
  $scope.editedItem = {name: "", year: ""};


  // default
  $scope.list = [
    {
      name: "Mike Moore",
      year: "This movie sucks"
    },
    {
      name: "Ganondorf Dragmire",
      year: "I've seen better"
    },
    {
      name: "Natu Myers",
      year: "Not enough swimming. Bad."
    },
    {
      name: "Donald J Trump",
      year: "Crooked media. SAD!"
    }
  ];

  // crud
  $scope.addItem = function(item) {
    $scope.list.push({
      name: item.name,
      year: item.year
    });
  };

  $scope.edit = function(item) {
    $scope.currentItem = item;
    $scope.editedItem.name = item.name;
    $scope.editedItem.year = item.year;
  };

  $scope.save = function(item) {
    $scope.currentItem.name = item.name;
    $scope.currentItem.year = item.year;
  };

  $scope.remove = function(item) {
    var index = $scope.list.indexOf(item);
    $scope.list.splice(index, 1);
  };

  // sortby func
  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
    $scope.list = orderBy(friends, $scope.propertyName, $scope.reverse);
  };




}]);
