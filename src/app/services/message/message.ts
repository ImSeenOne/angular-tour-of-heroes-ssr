import {MessageType} from "./message-type";

export class Message {
  text: string;
  type: MessageType;
  visible: boolean;
  constructor() {
    this.text = ""
    this.type = MessageType.DEFAULT
    this.visible = true;
  }
}
