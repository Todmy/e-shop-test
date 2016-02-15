'use strict';

var _ = require('underscore');

module.exports = ProductsCtrl;

function ProductsCtrl(GoodsResource, CategoriesResource, $sessionStorage, Notification) {
  this.goods = new GoodsResource();
  this.categories = new CategoriesResource();
  this.sessionStorage = $sessionStorage;
  this.Notification = Notification;

  this.getGoods();
  this.getCategories();
}

ProductsCtrl.prototype.getGoods = function(category) {
  var self = this;
  var propertyObject = {};

  if (typeof category !== 'undefined') {
    propertyObject.category = category;
  }

  this.goods.$get(propertyObject).then(function(response) {
    self.items = response.resource;
  });
};

ProductsCtrl.prototype.getCategories = function() {
  var self = this;

  this.categories.$get().then(function(response) {
    self.categories = response.resource;
    self.categories.unshift('all');
  });
};

ProductsCtrl.prototype.addToCart = function(item) {
  this.sessionStorage.cart = this.sessionStorage.cart || [];

  var elementInSessionStorage = _.find(this.sessionStorage.cart, { id: item.id });

  if (typeof elementInSessionStorage === 'undefined') {
    this.sessionStorage.cart.push(_.extend(_.clone(item), { quantity: 1 }));
  } else {
    elementInSessionStorage.quantity++;
  }

  this.Notification.success('Item added to the cart');
};
