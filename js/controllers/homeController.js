AngularApp.controller('HomeCtrl', [
  '$location', '$rootScope', '$scope', 'Session', function($location, $rootScope, $scope, Session) {
    $rootScope.location = $location;

    $scope.resources = [
        'http://techslides.com/demos/sample-videos/small.webm',
        'http://techslides.com/demos/sample-videos/small.ogv',
        'http://techslides.com/demos/sample-videos/small.mp4'
      ],
      $scope.poster = 'http://placehold.it/2000&text=you%20may%20want%20to%20have%20a%20poster',
      $scope.fullScreen = true,
      $scope.muted = true,
      $scope.zIndex = '22'
      $scope.pausePlay = false;

    $scope.login = function() {
      var u;
      $scope.loading = true;
      u = $scope.loginModel;
      return Session.login(u.email, u.password).then(function(user) {
        $rootScope.user = user;
        return $location.path('/home');
      }, function(error) {
        $scope.loading = false;
        return $scope.loginError = error;
      });
    }

    $scope.signup = function() {
      var u;
      u = $scope.signupModel;
      return Session.register(u.firstName, u.lastName, u.email, u.password, u.confirmPassword).then(function(user) {
        return $location.path('/home');
      }, function(error) {
        $scope.loading = false;
        return $scope.signUpError = error;
      });
    }

    $scope.logout = function() {
      return Session.logout().then(function() {
        return $rootScope.user = false;
      });
    }

}]);
