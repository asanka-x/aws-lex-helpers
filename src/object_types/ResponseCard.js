'use strict';

class ResponseCard{
    constructor(){
    }

    setGenericAttachments(genericAttachments){
        this.genericAttachments = genericAttachments;
        return this;
    }

    build(){
        return {
            "version": 1,
            "contentType": "application/vnd.amazonaws.card.generic",
            "genericAttachments": this.genericAttachments
        };
    }
}

module.exports = ResponseCard;