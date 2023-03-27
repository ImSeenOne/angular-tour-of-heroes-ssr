import { Component } from '@angular/core';
import { MessageService } from '../services/message/message.service';
import {Message} from "../services/message/message";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  constructor(public messageService: MessageService) {

  }

  close(message: Message) {
    message.visible = false;
  }
}
