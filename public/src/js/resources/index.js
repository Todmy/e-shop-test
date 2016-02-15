var app = require('angular').module('app');

app.factory('GoodsResource', require('./goods-resource'));
app.factory('CategoriesResource', require('./categories-resource'));
app.factory('SaleResource', require('./sale-resource'));
