'use strict';

class Responses {
    static elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message,responseCard) {
        let response = {
            sessionAttributes,
            dialogAction: {
                type: 'ElicitSlot',
                intentName,
                slots,
                slotToElicit
            }
        };
        if(message){
            response.dialogAction.message = message;
        }
        if (responseCard) {
            response.dialogAction.responseCard = responseCard;
        }
        return response;
    }

    static elicitIntent(sessionAttributes, message,responseCard) {
        let response = {
            sessionAttributes,
            dialogAction: {
                type: 'ElicitIntent'
            }
        };
        if(message){
            response.dialogAction.message = message;
        }
        if (responseCard) {
            response.dialogAction.responseCard = responseCard;
        }
        return response;
    }

    static confirmIntent(sessionAttributes, intentName, slots, message,responseCard) {
        let response = {
            sessionAttributes,
            dialogAction: {
                type: 'ConfirmIntent',
                intentName,
                slots,
                message,
            },
        };

        if (responseCard) {
            response.dialogAction.responseCard = responseCard;
        }
        return response;
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

    static buildValidationResult(isValid, violatedSlot, message) {
        return {
            isValid,
            violatedSlot,
            message,
        };
    }
}

module.exports = Responses;