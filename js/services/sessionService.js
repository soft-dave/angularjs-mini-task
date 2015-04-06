AngularAppService.factory('Session', [
  '$location', '$http', '$q', function($location, $http, $q, $scope, $rootScope) {
    return {
      login: function(email, password) {
        var deferred;
        deferred = $q.defer();
        $http.post('api/login.php', {
          user: {
            email: email,
            password: password
          }
        }).success(function(data) {
          var _currentUser;
          _currentUser = data;
          return deferred.resolve(_currentUser);
        }).error(function(data) {
          return deferred.reject(data.error);
        });
        return deferred.promise;
      },
      logout: function() {
        var deferred;
        deferred = $q.defer();
        $http["delete"]("api/logout.php").then(function() {
          var _currentUser;
          _currentUser = null;
          return deferred.resolve();
        });
        return deferred.promise;
      },
      register: function(firstName, lastName, email, password, confirmPassword) {
        var deferred;
        deferred = $q.defer();
        $http.post('api/signup.php', {
          user: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirmation: confirmPassword
          }
        }).success(function(data) {
          var _currentUser;
          if (data.id) {
            return deferred.resolve(data);
          } else {
            return deferred.reject(data);
          }
        }).error(function(data) {
          return deferred.reject(data);
        });
        return deferred.promise;
      }
    };
  }
]);
