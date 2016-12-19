module.exports = grunt => {

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.loadTasks('tasks');

    grunt.initConfig({
        'doxdox': {
            'custom template': {
                'inputs': ['test/fixtures/plugin.js'],
                'output': 'temp/plugin.md',
                'config': {
                    'title': 'Sample Title',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    'layout': 'test/fixtures/template.hbs',
                    'package': 'test/fixtures/package.json'
                }
            }
        },
        'mkdir': {
            'all': {
                'options': {
                    'create': ['temp']
                }
            }
        },
        'mochaTest': {
            'doxdox': {
                'src': ['test/specs/**/*.js']
            }
        }
    });

    grunt.registerTask('test', ['mkdir', 'doxdox', 'mochaTest']);

};
