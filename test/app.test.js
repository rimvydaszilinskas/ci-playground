const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    it('should be hello', () => {
        assert.equal(app(), 'hello');
    });
});