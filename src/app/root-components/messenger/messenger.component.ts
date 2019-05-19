import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent {
  details: string;
  message: string;
  sending: boolean = true;
  constructor(private router: Router) { }

  send() {
    if(!this.message) return;

    this.details = 'Sending Message...';
    this.sending = false;

    setTimeout(() => { 
    this.sending = true;
      this.closePopup();
    }, 1000);
  }

  closePopup(){
    this.router.navigate([{outlets: {popup: null}}])
  }
  
}
