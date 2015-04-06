AngularApp.controller('LogoutCtrl', [
  '$location', '$rootScope', '$scope', 'Session', function($location, $rootScope, $scope, Session) {
    $rootScope.location = $location;

    Session.logout().then(function() {
      $rootScope.user = false;
      $location.path("/");
    });
}]);
