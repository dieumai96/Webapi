import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from './message';
import { NgForm } from '@angular/forms';
@Component ({
    selector : 'app-message-input',
    templateUrl : './message-input.html',
})
export class MessageInputComponent{
    constructor(
        private messageService : MessageService
    ){}
    onSubmit(form : NgForm){
       
        const message = new Message(form.value.content,'Vu Thuy');
        this.messageService.addMessage(message);
        form.onReset();
    }
}