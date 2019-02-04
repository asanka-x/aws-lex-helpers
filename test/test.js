const assert = require('assert');
const LexHelpers = require('../src/LexHelpers');

describe('Object', function() {
  describe('LexHelpers', function() {
    it('should be a type of function', function() {
      assert.equal(typeof LexHelpers, 'function');
    });
  });
});
