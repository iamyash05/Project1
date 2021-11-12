import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../custom-service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  message: any;

  constructor(private alertService: MessageService) { }

  ngOnInit() {
      this.subscription = this.alertService.getMessage().subscribe(message => { 
          this.message = message; 
      });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}