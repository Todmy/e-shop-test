exports.inject = function(app) {
  app.controller('MainCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function MainCtrl() {};
