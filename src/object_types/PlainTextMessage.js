'use strict';

class PlainTextMessage{
    constructor(message){
        this.message = message;
    }

    setMessage(message){
        this.message = message;
        return this;
    }

    build(){
        return { contentType: 'PlainText', content: this.message }
    }
}

module.exports = PlainTextMessage;