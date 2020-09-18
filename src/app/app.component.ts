import { Component, OnDestroy } from '@angular/core';
import{MessageServiceService} from './message-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageServiceService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => {
        if (message) {
          this.messages.push(message);
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
