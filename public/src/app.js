var angular = require('angular');
require('ui-router');

var app = angular.module('app', [ 'ui.router' ])
app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

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
      templateUrl: require('./js/pages/cart-controller.js').inject(app),
      controller: 'CartCtrl',
      controllerAs: 'cart'
    });
} ]);
