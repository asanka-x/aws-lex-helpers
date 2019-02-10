const assert = require('assert');
const Responses = require('./../index').Responses;
const AttachmentButton = require('./../index').AttachmentButton;
const ResponseCard = require('./../index').ResponseCard;
const ResponseCardAttachment = require('./../index').ResponseCardAttachment;
const PlainTextMessage = require('./../index').PlainTextMessage;
const Constants = require('./../index').Constants;

describe('LexHelpers', function() {
  describe('LexHelpers', function() {
    it('should be a type of function', function() {
      assert.equal(typeof Responses, 'function');
      assert.equal(typeof AttachmentButton, 'function');
      assert.equal(typeof ResponseCard, 'function');
      assert.equal(typeof ResponseCardAttachment, 'function');
      assert.equal(typeof PlainTextMessage, 'function');
      assert.equal(typeof Constants, 'object');
    });
  });
});
