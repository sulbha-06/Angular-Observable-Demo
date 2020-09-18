import { Component, OnInit } from '@angular/core';
import{MessageServiceService} from '../message-service.service';

@Component({
  selector: 'app-receiver-component',
  templateUrl: './receiver-component.component.html',
  styleUrls: ['./receiver-component.component.css']
})
export class ReceiverComponentComponent implements OnInit {

  constructor(private messageService: MessageServiceService) { }
    message:string;
    sendMessage(): void {
        // send message to subscribers via observable subject
        console.log("message is ------",this.message);
        
        this.messageService.sendMessage(this.message);
    }

    clearMessages(): void {
        // clear messages
        this.messageService.clearMessages();
    }

  ngOnInit(): void {
  }

}
