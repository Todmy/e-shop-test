'use strict';

module.exports = function($resource) {
  return $resource('/system/api/goods/:category', { category: '@category' });
};
