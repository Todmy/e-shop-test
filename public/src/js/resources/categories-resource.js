'use strict';

module.exports = function($resource) {
  return $resource('/system/api/categories', {});
};
