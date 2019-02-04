'use strict';

class ResponseCardAttachment{
    constructor(){
    }

    setTitle(title){
        this.title = title;
        return this;
    }

    setSubTitle(subTitle){
        this.subTitle = subTitle;
        return this;
    }

    setImageUrl(imageUrl){
        this.imageUrl = imageUrl;
        return this;
    }

    setAttachmentLinkUrl(attachmentLinkUrl){
        this.attachmentLinkUrl = attachmentLinkUrl;
        return this;
    }

    setButtons(buttons){
        this.buttons = buttons;
        return this;
    }

    build(){
        return {
            title:this.title,
            subTitle:this.setSubTitle,
            imageUrl:this.imageUrl,
            attachmentLinkUrl:this.attachmentLinkUrl,
            buttons:this.buttons
        }
    }

}

module.exports = ResponseCardAttachment;