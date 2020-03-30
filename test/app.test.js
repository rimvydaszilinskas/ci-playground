const assert = require('chai').assert;
const app = require('../app');

describe('App', () => {
    it('should be 1', () => {
        assert.equal(app(), 2);
    });
});