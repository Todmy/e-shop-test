var angular = require('angular');
require('angular-mocks');
require('angular-resource');
require('ui-router');
require('ng-storage');
require('angular-ui-notification');

var db = require('./backend');

var app = angular.module('app', [ 'ui.router', 'ngResource', 'ngMockE2E', 'ngStorage', 'ui-notification' ]);

require('./js/resources');
require('./js/pages');

app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'html/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
      .state('main.products', {
        url: '/products',
        templateUrl: 'html/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .state('main.cart', {
        url: '/cart',
        templateUrl: 'html/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      });
} ])
.config(function(NotificationProvider) {
  NotificationProvider.setOptions({
    delay: 10000,
    startTop: 20,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'left',
    positionY: 'bottom'
  });
}).run(db);
