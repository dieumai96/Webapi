import { Injectable } from '@angular/core';
import { Message } from './../message/message';
@Injectable()
export class MessageService {
  private messages : Message[] = [];
  constructor() { }
  addMessage(message : Message){
    this.messages.push(message);
    console.log(message);
  }
  getMessage(){
    return  this.messages;
  }
  deleteMessage(message : Message){
    this.messages.splice(this.messages.indexOf(message),1);
  }
}
