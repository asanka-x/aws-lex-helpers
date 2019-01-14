var assert = require('assert');
var LexHelpers = require('../src/LexHelpers');

describe('Object', function() {
  describe('LexHelpers', function() {
    it('should be a type of function', function() {
      assert.equal(typeof LexHelpers, 'function');
    });
  });
});
