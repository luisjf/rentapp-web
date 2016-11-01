'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'Property',
    'Local',
    'Tenant',
    'Contract',
    'Payment',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/rentals/home');

    $stateProvider
      .state('rentals', {
        url:'/rentals',
        templateUrl: 'views/rentals/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('rentals.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/rentals/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              ]
            })
          }
        }
      })
      .state('rentals.property',{
          templateUrl:'views/rentals/property/property.html',
          url:'/property',
      })
      .state('rentals.contract',{
          templateUrl:'views/rentals/contract/contract.html',
          url:'/contract',
          controller: 'PropertyCtrl'
      })
      .state('rentals.local',{
          templateUrl:'views/rentals/local/local.html',
          url:'/local'
      })
      .state('rentals.tenant',{
          templateUrl:'views/rentals/tenant/tenant.html',
          url:'/tenant'
      })
      .state('rentals.payment',{
          templateUrl:'views/rentals/payment/payment.html',
          url:'/payment'
      })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })

  }]);
