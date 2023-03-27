import { Injectable } from '@angular/core';
import {Message} from "./message";
import {MessageType} from "./message-type";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  add(message: string, messageType: MessageType) {
    let messageObject: Message = {
      text: message,
      type: messageType,
      visible: true
    };
    this.messages.push(messageObject);
  }

  clear() {
    this.messages = [];
  }
}
