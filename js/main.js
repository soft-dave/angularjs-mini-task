window.AngularAppService = angular.module('AngularAppService', [])
window.AngularAppDirectives = angular.module('AngularAppDirectives', [])
window.AngularApp = angular.module('AngularApp', ['angular-blocks', 'AngularAppService', 'AngularAppDirectives', 'ngRoute', 'ngVidBg'])