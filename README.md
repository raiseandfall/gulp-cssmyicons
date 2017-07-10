# CSS my icons  

[![Build Status](https://travis-ci.org/raiseandfall/gulp-cssmyicons.svg)](https://travis-ci.org/raiseandfall/gulp-cssmyicons) [![Downloads](https://img.shields.io/npm/dt/gulp-cssmyicons.svg)](https://www.npmjs.com/package/gulp-cssmyicons)

> [Gulp](http://gulpjs.com/) plugin to generate a CSS file for SVG icons used as background-image:

```css
.icon-home{background-image:url('icons/home.svg');background:no-repeat;}
```

> There are also versions for [Grunt](https://github.com/raiseandfall/grunt-cssmyicons) and [Broccoli](https://github.com/raiseandfall/broccoli-cssmyicons)

## [CHANGELOG](./CHANGELOG.md)

## INSTALL
```shell
$ npm install gulp-cssmyicons --save-dev
```

## USAGE
```js
var cssMyIcons = require('gulp-cssmyicons');

gulp.task('icons', function() {
  return gulp.src('images/*.svg')
    .pipe(cssMyIcons('icons.css'))
    .pipe(gulp.dest('./dist/css/'))
});
```

## OPTIONS

### cssMyIcons(file, options)

#### file
Type: `String`  
_Required_  

The icons CSS filename

#### options.prefix
Type: `String`  
_Optional_  

Prefix to add at the beginning of the icons path (see tests)


## CONTRIBUTE
```shell
$ npm run test
```

## LICENSE
MIT
