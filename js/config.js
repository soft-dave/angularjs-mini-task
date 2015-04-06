AngularApp.config([
  "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    return $routeProvider.when("/", {templateUrl: "js/views/home/index.html", controller: 'HomeCtrl'})
      .when("/login", {templateUrl: "js/views/home/login.html", controller: 'HomeCtrl'})
      .when("/signup", { templateUrl: "js/views/home/signup.html", controller: 'HomeCtrl'})
      .when("/profile", { templateUrl: "js/views/profile/index.html", controller: 'ProfileCtrl'})
      .when("/logout", {templateUrl: "js/views/home/logout.html", controller: 'LogoutCtrl'});
  }
]);
