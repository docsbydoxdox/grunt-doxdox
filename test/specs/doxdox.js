const assert = require('assert');
const fs = require('fs');

describe('grunt task', () => {

    describe('doxdox', () => {

        it('task called with all configuration properties set', () => {

            assert.equal(
                fs.readFileSync('temp/plugin.md', 'utf8'),
                fs.readFileSync('./test/fixtures/plugin.md', 'utf8')
            );

        });

    });

});
