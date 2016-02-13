exports.inject = function(app) {
  app.controller('CartCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function CartCtrl($scope) {

};
