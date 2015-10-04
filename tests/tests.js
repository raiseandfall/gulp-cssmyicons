'use strict';

var gulp = require('gulp');
var cssMyIcons = require('../');
var assert = require('assert');
var fs = require('fs');
var es = require('event-stream');

describe('gulp cssmyicons', function() {

  it('should generate a CSS file', function(done) {
    gulp.src(__dirname + '/fixtures/*.svg')
      .pipe(cssMyIcons('icons.css').on('error', function(err) {
        console.log('err:', err);
      }))
      .pipe(gulp.dest('./'))
      .pipe(es.wait(function() {
        assert.equal(
          fs.readFileSync('icons.css', 'utf8'),
          fs.readFileSync('tests/mocks/icons.css', 'utf8')
        );

        fs.unlinkSync('icons.css');
        done();
      }));
  });

  it('should generate a CSS file and move it to a destination directory', function() {
    gulp.src(__dirname + '/fixtures/*.svg')
      .pipe(cssMyIcons('icons.css').on('error', function(err) {
        console.log('err:', err);
      }))
      .pipe(gulp.dest('tests/'))
      .pipe(es.wait(function() {
        assert.equal(
          fs.readFileSync('tests/icons.css', 'utf8'),
          fs.readFileSync('tests/mocks/icons.css', 'utf8')
        );

        fs.unlinkSync('tests/icons.css');
        done();
      }));
  });

  it('should generate icons path with a prefix to the path', function() {

  });

});
