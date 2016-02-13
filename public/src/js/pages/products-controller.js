exports.inject = function(app) {
  app.controller('ProductsCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function ProductsCtrl($scope) {
console.log('hello');
};
