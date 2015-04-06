AngularAppService.factory('Session', [
  '$location', '$http', '$q', function($location, $http, $q) {
    $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';
    var api_url = "http://180.211.96.180:8081/";
    var _currentUser = null;
    return {
      login: function(email, password) {
        var deferred;
        deferred = $q.defer();
        $http.post(api_url + 'api/sessions', {
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
        $http["delete"](api_url + "api/sessions").then(function() {
          var _currentUser;
          _currentUser = null;
          return deferred.resolve();
        });
        return deferred.promise;
      },
      register: function(firstName, lastName, email, password, confirmPassword) {
        var deferred;
        deferred = $q.defer();
        $http.post(api_url + 'api/users', {
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
      },
      getCurrentUser: function(forceUpdate) {
        var deferred;
        deferred = $q.defer();
        if (!forceUpdate && this.isAuthenticated()) {
          deferred.resolve(_currentUser);
        } else {
          $http.get(api_url + 'api/users').success(function(data) {
            _currentUser = data.user;
            return deferred.resolve(_currentUser);
          }).error(function(data) {
            return deferred.reject(data);
          });
        }
        return deferred.promise;
      },
      isAuthenticated: function() {
        return !!_currentUser;
      }
    };
  }
]);
