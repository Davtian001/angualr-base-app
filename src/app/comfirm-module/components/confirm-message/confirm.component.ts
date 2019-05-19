import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmMessage } from '../../confirm-message.interface';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})

export class ConfirmComponent {
  options: ConfirmMessage;
  
  constructor(@Inject(MAT_DIALOG_DATA) data) {
    this.options = data;
  }
  
  close(){
    this.options.cancel ?  this.options.cancel() : null
  }
}
