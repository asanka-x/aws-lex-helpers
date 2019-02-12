# AWS Lex Helpers

[![npm version](https://badge.fury.io/js/aws-lex-helpers.svg)](https://badge.fury.io/js/aws-lex-helpers)
[![Build Status](https://travis-ci.org/asanka-x/aws-lex-helpers.svg?branch=master)](https://travis-ci.org/asanka-x/aws-lex-helpers)


AWS Lex helper classes and functions to build responses


## Response Types ##

* ElicitSlot
* ElicitIntent
* ConfirmIntent
* Close
* Delegate

## Response Message Components ##

* PlainTextMessage
* ResponseCard
  * ResponseCardAttachment
    * AttachmentButton

## Usage ##

### Installation ###

```bash
npm install aws-lex-helpers --save
```

### Initialization ###

```javascript
const AWSLexHelpers = require('aws-lex-helpers');

const LexResponses = AWSLexHelpers.Responses;
const LexResponseCard = AWSLexHelpers.ResponseCard;
const LexResponseCardAttachment = AWSLexHelpers.ResponseCardAttachment;
const LexAttachmentButton = AWSLexHelpers.AttachmentButton;
const LexConstants = AWSLexHelpers.Constants;
const LexPlainTextMessage = AWSLexHelpers.PlainTextMessage;
```

### Plain Text Message ###

```javascript
let plainTextMessage = new LexPlainTextMessage()
                .setMessage('hey there this is a plain text message')
                .build();
```

### Response Card ###

```javascript
let firstAttachmentButton = new LexAttachmentButton()
        .setText('First Button')
        .setValue('first button')
        .build();

let secondAttachmentButton = new LexAttachmentButton()
        .setText('Second Button')
        .setValue('second button')
        .build();

let responseCardAttachment = new LexResponseCardAttachment()
        .setTitle('Attachment Title')
        .setSubTitle('Attachment subtitle')
        .setImageUrl('<IMAGE_URL>') // Hosted url of the image
        .setAttachmentLinkUrl('<LINK_URL>') // URL to be opened once click on the image
        .setButtons([firstAttachmentButton, secondAttachmentButton])
        .build();
        
let responseCard = new LexResponseCard()
        .setGenericAttachments([responseCardAttachment]) // Response card attachments can be provided as an array
        .build();
```

### Constants ###

* FULFILMENT_STATES
  * FULFILLED
  * FAILED

* INVOCATION_SOURCE
  * DIALOG_CODE_HOOK
  * FULFILMENT_CODE_HOOK
