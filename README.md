#grunt-doxdox

> Generate documentation with doxdox.

##Installation

```bash
$ npm install grunt-doxdox --save-dev
```

##Usage

###Basic Options

```javascript
grunt.initConfig({
    doxdox: {
        dev: {
            input: 'script.js',
            output: 'docs/index.html'
        }
    }
});
```

###Custom Configuration Options

```javascript
grunt.initConfig({
    doxdox: {
        dev: {
            input: 'script.js',
            output: 'docs/index.html',
            config: {
                title: 'Sample Title',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                layout: 'docs/template.hbs',
                package: 'package.json'
            }
        }
    }
});
```
