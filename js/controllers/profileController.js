AngularApp.controller('ProfileCtrl', [
  '$http', '$location', '$scope', '$rootScope', '$timeout', '$routeParams', '$filter', '$q', 'Session', 'User', function($http, $location, $scope, $rootScope, $timeout, $routeParams, $filter, $q, Session, User) {
    $rootScope.location = $location;
    $scope.user = null;

    $scope.preview_image = function(input, imageId) {
      var f;
      f = new FileReader();
      f.readAsDataURL(input.files[0]);
      f.onload = function(e) {
        document.getElementById(imageId).src = e.target.result;
      };
    };

    $scope.setAvatar = function(element, imageId) {
      return $scope.preview_image(element, imageId);
    };

    $scope.changePasswordModel = {};
    $scope.refresh = function(forceUpdate) {
      return Session.getCurrentUser(forceUpdate).then(function(user) {
        return $scope.user = user;
      });
    };
    $scope.refresh(false);
    $scope.updateUser = function() {
      $scope.loading = true;
      return User.updateUser($scope.user).then(function(data) {
        $scope.flash_message = 'Your profile has been updated.';
        $scope.refresh(false);
        $timeout((function() {
          $scope.flash_message = null;
          return $scope.$digest();
        }), 5000);
        return $scope.loading = false;
      }, function(data) {
        $scope.loading = false;
        return $scope.memberFormError = data.errors;
      });
    };
  }
]);
