const doxdox = require('doxdox');
const utils = require('doxdox/lib/utils');

module.exports = grunt => {

    grunt.registerMultiTask('doxdox', 'Generate documentation with doxdox.', function plugin () {

        const done = this.async();

        const inputs = this.data.inputs;
        const output = this.data.output;

        const config = this.data.config || {};

        const pkg = grunt.file.readJSON(utils.findPackageFileInPath(config.package || 'package.json'));

        doxdox.parseInputs(inputs, {
            'description': config.description || pkg.description || '',
            'ignore': (config.ignore || '').split(/\s*,\s*/),
            'layout': (config.layout || 'markdown').toLowerCase(),
            'parser': (config.parser || 'dox').toLowerCase(),
            pkg,
            'title': config.title || pkg.name || 'Untitled Project'
        }).then(content => {

            grunt.file.write(output, content, {'encoding': 'utf8'});

            done();

        });

    });

};
