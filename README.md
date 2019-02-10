# AWS Lex Helpers

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

```javascript
const AWSLexHelpers = require('aws-lex-helpers');

const LexResponses = AWSLexHelpers.Responses;
const LexResponseCard = AWSLexHelpers.ResponseCard;
const LexResponseCardAttachment = AWSLexHelpers.ResponseCardAttachment;
const LexAttachmentButton = AWSLexHelpers.AttachmentButton;
const LexConstants = AWSLexHelpers.Constants;
const LexPlainTextMessage = AWSLexHelpers.PlainTextMessage;
```