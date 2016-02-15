'use strict';
var _ = require('underscore');

module.exports = CartCtrl;

function CartCtrl(SaleResource, $sessionStorage, Notification) {
  this.SaleResource = SaleResource;
  this.sessionStorage = $sessionStorage;
  this.Notification = Notification;

  this.items = this.sessionStorage.cart;
}

CartCtrl.prototype.buyGoods = function() {
  var self = this;
  var sale = new this.SaleResource(this.sessionStorage.cart);

  sale.$save().then(function(response) {
    self.sessionStorage.cart = [];
    self.items = self.sessionStorage.cart;

    return response.message;
  }).then(function(message) {
    self.Notification.success(message);
  });
};

CartCtrl.prototype.totalCost = function() {
  return _.reduce(this.items, function(totalCost, item) {
    return totalCost + item.quantity * item.price;
  }, 0);
};

CartCtrl.prototype.removeItem = function(itemForRemove) {
  this.items = _.reject(this.items, function(item) {
    return item.id === itemForRemove.id;
  });
  self.sessionStorage.cart = this.items;

  this.Notification.success('Item is successfully removed');
};
