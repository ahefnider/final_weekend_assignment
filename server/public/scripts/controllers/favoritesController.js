myApp.controller('FavoritesController', ['$scope', function($scope) {
  console.log('Favorites controller running');
  $scope.message = "Favorites Controller!";
}]);

// PRO MODE = Modify the Favorites view to display animals grouped by animal type.
// Allow a user to delete a favorite. The count display needs to reflect this!
