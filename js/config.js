AngularApp.config([
  "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    return $routeProvider.when("/", {templateUrl: "views/home/index.html", controller: 'HomeCtrl'})
      .when("/login", {templateUrl: "views/home/login.html", controller: 'HomeCtrl'})
      .when("/signup", { templateUrl: "views/home/signup.html", controller: 'HomeCtrl'})
      .when("/logout", {templateUrl: "views/home/logout.html", controller: 'LogoutCtrl'});
  }
]);
