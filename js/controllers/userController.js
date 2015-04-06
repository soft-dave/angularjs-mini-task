AngularApp.controller('UserCtrl', [
  '$location', '$rootScope', '$scope', '$timeout', '$routeParams', function($location, $rootScope, $scope, $timeout, $routeParams) {
    $rootScope.location = $location;
    $scope.user = $rootScope.user
  }
]);
