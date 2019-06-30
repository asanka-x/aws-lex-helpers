# AWS Lex Helpers

[![npm version](https://badge.fury.io/js/aws-lex-helpers.svg)](https://badge.fury.io/js/aws-lex-helpers)
[![Build Status](https://travis-ci.org/asanka-x/aws-lex-helpers.svg?branch=master)](https://travis-ci.org/asanka-x/aws-lex-helpers)


AWS Lex helper classes and functions to build responses


## Response Types

* ElicitSlot - Informs Amazon Lex that the user is expected to provide a slot value in the response
* ElicitIntent - Informs Amazon Lex that the user is expected to respond with an utterance that includes an intent
* ConfirmIntent -  Informs Amazon Lex that the user is expected to give a yes or no answer to confirm or deny the current intent
* Close - Informs Amazon Lex not to expect a response from the user
* Delegate - Directs Amazon Lex to choose the next course of action based on the bot configuration

View more details on [Lex Documentation](https://docs.aws.amazon.com/lex/latest/dg/lambda-input-response-format.html#using-lambda-response-format)

## Response Message Components

* PlainTextMessage
* ResponseCard
  * ResponseCardAttachment
    * AttachmentButton
    
## Lambda Function Response Structure

Your lambda functions need to response in the following format

```json
{
    "sessionAttributes": {
    "key1": "value1",
    "key2": "value2"
    ...
  },
  "dialogAction": {
    "type": "ElicitIntent, ElicitSlot, ConfirmIntent, Delegate, or Close",
    Full structure based on the type field. See below for details.
  }
}
```

Using this module, you can easily generate the above response like below.

1. Generate the dialog action content using message components (ResponseCard,ResponseCardAttachment,AttachmentButton,PlainTextMessage)
2. Generate the lambda response using the message component generated in step 1


## Usage

### Installation

```bash
npm install aws-lex-helpers --save
```

### Initialization

```javascript
const AWSLexHelpers = require('aws-lex-helpers');

// Response generator
const Responses = AWSLexHelpers.Responses;


// Message components
const {ResponseCard,ResponseCardAttachment,AttachmentButton,PlainTextMessage,Constants} = AWSLexHelpers;

```

### Plain Text Message

```javascript
let plainTextMessage = new PlainTextMessage()
                .setMessage('hey there this is a plain text message')
                .build();
```

### Response Card

```javascript
let firstAttachmentButton = new AttachmentButton()
        .setText('First Button')
        .setValue('first button')
        .build();

let secondAttachmentButton = new AttachmentButton()
        .setText('Second Button')
        .setValue('second button')
        .build();

let responseCardAttachment = new ResponseCardAttachment()
        .setTitle('Attachment Title')
        .setSubTitle('Attachment subtitle')
        .setImageUrl('<IMAGE_URL>') // Hosted url of the image
        .setAttachmentLinkUrl('<LINK_URL>') // URL to be opened once click on the image
        .setButtons([firstAttachmentButton, secondAttachmentButton])
        .build();
        
let responseCard = new ResponseCard()
        .setGenericAttachments([responseCardAttachment]) // Response card attachments can be provided as an array
        .build();
```

### Generating lambda response

```javascript
let sessionAttributes = {YOUR_SESSION_ATTRIBUTES};
let intentName = 'YOUR_INTENT_NAME';
let slots = {YOUR_SLOTS};
```

#### Elicit Slot

```javascript
let slotToElicit = {YOUR_SLOTS_TO_ELICIT};

let response = Responses.elicitSlot(sessionAttributes, intentName, slots, slotToElicit, plainTextMessage,responseCard);
```

#### Elicit Intent

```javascript
let response = Responses.elicitIntent(sessionAttributes, plainTextMessage, responseCard);
```

#### Confirm Intent

```javascript
let response = Responses.confirmIntent(sessionAttributes, intentName, slots, plainTextMessage,responseCard);
```

#### Close Intent

```javascript
let fulfillmentState = Constants.FULFILMENT_STATES.FULFILLED; // or FAILED

let response = Responses.close(sessionAttributes, fulfillmentState, plainTextMessage, responseCard);
```

#### Delegate Intent

```javascript
let response = Responses.delegate(sessionAttributes, slots);
```

Return the <b>response</b> above from your lambda function

### Additional Resources

#### Constants

* FULFILMENT_STATES
  * FULFILLED
  * FAILED

* INVOCATION_SOURCE
  * DIALOG_CODE_HOOK
  * FULFILMENT_CODE_HOOK
