const assert = require('assert');
const Responses = require('./../index').Responses;
const AttachmentButton = require('./../index').AttachmentButton;
const ResponseCard = require('./../index').ResponseCard;
const ResponseCardAttachment = require('./../index').ResponseCardAttachment;


describe('LexHelpers', function() {
  describe('LexHelpers', function() {
    it('should be a type of function', function() {
      assert.equal(typeof Responses, 'function');
      assert.equal(typeof AttachmentButton, 'function');
      assert.equal(typeof ResponseCard, 'function');
      assert.equal(typeof ResponseCardAttachment, 'function');
    });
  });
});
