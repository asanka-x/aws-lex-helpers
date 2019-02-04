'use strict';

class AttachmentButton{
    constructor(){
    }

    setText(text){
        this.text = text;
        return this;
    }

    setValue(value){
        this.value = value;
        return this;
    }

    build(){
        return {
            "text": this.text,
            "value": this.value
        };
    }
}

module.exports = AttachmentButton;