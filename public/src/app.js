var angular = require('angular');
require('angular-mocks');
require('angular-resource');
require('ui-router');
var db = require('./backend.js');

var app = angular.module('app', [ 'ui.router', 'ngResource', 'ngMockE2E' ]);
app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/products');

  $stateProvider
    .state('main', {
      abstract: true,
      templateUrl: 'html/main.html',
      controller: require('./js/pages/main-controller.js').inject(app),
      controllerAs: 'main'
    })
      .state('main.products', {
        url: '/products',
        templateUrl: 'html/products.html',
        controller: require('./js/pages/products-controller.js').inject(app),
        controllerAs: 'products'
      })
      .state('main.cart', {
        url: '/cart',
        templateUrl: 'html/cart.html',
        controller: require('./js/pages/cart-controller.js').inject(app),
        controllerAs: 'cart'
      });
} ]).run(db);
