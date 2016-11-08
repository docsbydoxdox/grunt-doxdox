const doxdox = require('doxdox');

module.exports = grunt => {

    grunt.registerMultiTask('doxdox', 'Generate documentation with doxdox.', function plugin () {

        const done = this.async();

        const pkg = grunt.file.readJSON('package.json');

        const {inputs, output} = this.data;

        const {description, ignore, layout, parser, title} = this.data.config || {};

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
