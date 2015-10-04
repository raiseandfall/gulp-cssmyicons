'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var PluginError = gutil.PluginError;
var File = gutil.File;
var path = require('path');
var PLUGIN_NAME = 'gulp-cssmyicons';

// file can be a vinyl file object or a string
module.exports = function(file, opts) {
  if (!file) {
    throw new PluginError(PLUGIN_NAME, 'Missing file option for ' + PLUGIN_NAME);
  }

  // Opts
  opts = opts || {};

  var fileName,
    iconsCSS = '';

  //
  if (typeof file === 'string') {
    fileName = file;
  } else if (typeof file.path === 'string') {
    fileName = path.basename(file.path);
  } else {
    throw new PluginError(PLUGIN_NAME, 'Missing path file for ' + PLUGIN_NAME);
  }

  var getCSS = function(el, prefix) {
    // Path
    var path = el.split('/'),
      file = path[path.length-1].split('.'),
      filenameNoExt = file[0],
      relativePath = prefix + el;
    return '.icon-' + filenameNoExt + '{background-image:url("' + relativePath + '");background-repeat:no-repeat;}';
  };

  function bufferFile(file, enc, cb) {
    // Empty files
    if (file.isNull()) {
      cb();
      return;
    }

    iconsCSS += getCSS(file.relative, opts.prefix || '');

    cb();
  }

  function endStream(cb) {
    // If not icons
    if (iconsCSS.length === 0) {
      cb();
      return;
    }

    this.push(new File({ path: fileName, contents: new Buffer(iconsCSS) }));

    cb();
  }

  return through.obj(bufferFile, endStream);
};

