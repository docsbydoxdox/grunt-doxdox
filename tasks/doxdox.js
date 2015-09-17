var doxdox = require('doxdox'),
    utils = require('doxdox/lib/utils'),
    fs = require('fs'),
    path = require('path'),
    extend = require('extend');

module.exports = function (grunt) {

    grunt.registerMultiTask('doxdox', 'Generate documentation with doxdox.', function () {

        var done = this.async(),
            input,
            output,
            config = {
                title: '',
                description: '',
                layout: 'bootstrap'
            };

        if (this.data.input && this.data.output) {

            input = this.data.input;
            output = this.data.output;

            if (this.data.config) {

                config = extend(true, {}, config, this.data.config);

            }

            if (!config.package) {

                config.package = utils.findPackagePath(input);

            }

            if (fs.existsSync(config.package)) {

                config.package = require(config.package);

                if (!config.title && config.package.name) {

                    config.title = config.package.name;

                }

                if (!config.description && config.package.description) {

                    config.description = config.package.description;

                }

            }

            if (!config.title) {

                config.title = 'Untitled Project';

            }

            doxdox.parseInput(
                path.normalize(path.resolve(input)),
                config,
                config.package
            ).then(function (content) {

                grunt.file.write(output, content, {encoding: 'utf8'});

                done();

            });

        } else {

            throw new Error('Valid input and output properties are required.');

        }

    });

};
