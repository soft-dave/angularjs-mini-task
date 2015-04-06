AngularAppService.factory('User', [
  '$location', '$http', '$q', function($location, $http, $q) {
    var api_url = "http://180.211.96.180:8081/";
    return {
      getUser: function(user_id) {
        var deferred;
        deferred = $q.defer();
        $http.get(api_url + '/api/users').success(function(data) {
          return deferred.resolve(data.user);
        }).error(function(data) {
          return deferred.reject(data);
        });
        return deferred.promise;
      },
      updateUser: function(user) {
        var deferred;
        deferred = $q.defer();
        $http.put(api_url + '/api/users', {
          user: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
          }
        }).success(function(data) {
          return deferred.resolve(data);
        }).error(function(data) {
          return deferred.reject(data);
        });
        return deferred.promise;
      }
    };
  }
]);
