const doxdox = require('doxdox');

module.exports = (grunt) => {

    grunt.registerMultiTask('doxdox', 'Generate documentation with doxdox.', function () {

        const done = this.async();

        if (!this.data.config) {

            this.data.config = {};

        }

        doxdox.parseInputs(this.data.inputs, {
            'title': this.data.config.title || 'Untitled Project',
            'description': this.data.config.description || '',
            'ignore': (this.data.config.ignore || '').split(/\s*,\s*/),
            'parser': this.data.config.parser || 'dox',
            'layout': this.data.config.layout || 'markdown'
        }).then(content => {

            grunt.file.write(this.data.output, content, {'encoding': 'utf8'});

            done();

        })

    });

};
