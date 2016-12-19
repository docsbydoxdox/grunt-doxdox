const doxdox = require('doxdox');
const utils = require('doxdox/lib/utils');

module.exports = grunt => {

    grunt.registerMultiTask('doxdox', 'Generate documentation with doxdox.', function plugin () {

        const done = this.async();

        const {inputs, output} = this.data;

        const {description, ignore, layout, packageFile, parser, title} = this.data.config || {};

        const pkg = grunt.file.readJSON(utils.findPackageFileInPath(packageFile || 'package.json'));

        doxdox.parseInputs(inputs, {
            'description': description || pkg.description || '',
            'ignore': (ignore || '').split(/\s*,\s*/),
            'layout': (layout || 'markdown').toLowerCase(),
            'parser': (parser || 'dox').toLowerCase(),
            pkg,
            'title': title || pkg.name || 'Untitled Project'
        }).then(content => {

            grunt.file.write(output, content, {'encoding': 'utf8'});

            done();

        });

    });

};
