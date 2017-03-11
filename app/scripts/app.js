'use strict';

/**
 * @ngdoc overview
 * @name chineseDoctorApp
 * @description
 * # chineseDoctorApp
 *
 * Main module of the application.
 */
angular.module('chineseDoctorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when("/bootstrap",{
      templateUrl: 'views/bootstrapexample.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
