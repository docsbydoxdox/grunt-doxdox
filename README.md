# grunt-doxdox

> Generate documentation with doxdox.

[![Build Status](https://travis-ci.org/neogeek/grunt-doxdox.svg?branch=master)](https://travis-ci.org/neogeek/grunt-doxdox)
[![NPM Version](http://img.shields.io/npm/v/grunt-doxdox.svg)](https://www.npmjs.org/package/grunt-doxdox)
[![Greenkeeper badge](https://badges.greenkeeper.io/neogeek/grunt-doxdox.svg)](https://greenkeeper.io/)

## Installation

```bash
$ npm install grunt grunt-doxdox --save-dev
```

## Usage

### Basic Options

```javascript
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-doxdox');

    grunt.initConfig({
        'doxdox': {
            'markdown': {
                'inputs': ['facade.js'],
                'output': 'docs.md'
            }
        }
    });

    grunt.registerTask('default', ['doxdox']);

}
```

### Custom Configuration Options

```javascript
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-doxdox');

    grunt.initConfig({
        'doxdox': {
            'html': {
                'inputs': ['script.js'],
                'output': 'docs/index.html',
                'config': {
                    'title': 'Sample Title',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    'layout': 'docs/template.hbs',
                    'package': 'package.json'
                }
            }
        }
    });

    grunt.registerTask('default', ['doxdox']);

}
```
