var fs = require('fs');
var path = require('path');

var noop = function() {};
var originalLog = console.log;
var sassRoot = path.dirname(__dirname) + '/src/partials/sass/';

function readCssFile(filePath) {
  var fileFolder = path.dirname(filePath);
  var contents = fs.readFileSync(filePath, 'utf-8');

  return contents.replace(/url\(['"]?([^)'"]+)['"]?\)/g, function(match, assetPath) {
      if (assetPath.indexOf('data:') === -1) {
        assetPath = path.normalize(fileFolder + '/' + assetPath);
        assetPath = path.relative(sassRoot, assetPath).replace(/\\/g, '/');
      }

      return 'url(' + assetPath + ')';
  });
}

module.exports = function(filePath, prev, done) {
  var config = { file: filePath };

  // //TODO: remove this when node-sass stops print import ouput to console
  // console.log = noop;

  if (filePath.indexOf('.css') === filePath.length - 4) {
    config.contents = readCssFile(sassRoot + filePath);
  }

  done(config);
  console.log = originalLog;
};
