'use strict';

class LexHelpers {
    static elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message) {
        return {
            sessionAttributes,
            dialogAction: {
                type: 'ElicitSlot',
                intentName,
                slots,
                slotToElicit,
                message,
            },
        };
    }

    static confirmIntent(sessionAttributes, intentName, slots, message) {
        return {
            sessionAttributes,
            dialogAction: {
                type: 'ConfirmIntent',
                intentName,
                slots,
                message,
            },
        };
    }

    static close(sessionAttributes, fulfillmentState, message, responseCard) {
        let response = {
            sessionAttributes,
            dialogAction: {
                type: 'Close',
                fulfillmentState,
                message,
            },
        };
        if (responseCard) {
            response.dialogAction.responseCard = responseCard;
        }
        return response;
    }

    static delegate(sessionAttributes, slots) {
        return {
            sessionAttributes,
            dialogAction: {
                type: 'Delegate',
                slots,
            },
        };
    }

    // ---------------- Helper Functions --------------------------------------------------

    static buildValidationResult(isValid, violatedSlot, messageContent) {
        return {
            isValid,
            violatedSlot,
            message: { contentType: 'PlainText', content: messageContent },
        };
    }
}

module.exports = LexHelpers;