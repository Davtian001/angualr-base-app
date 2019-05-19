import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmMessage } from '../confirm-message.interface';
import { ConfirmComponent } from '../components/confirm-message/confirm.component';

@Injectable({
  providedIn: 'root'
})

export class ConfirmDialogService {

  constructor(private dialog: MatDialog){}

  /**
   * 
   * @param options 
   * @description  {
   *  message: string[];
   *  accept: Function;
   * checkBox?: {
   *  text: string,
   *  fn: Function,
   * }
   * disableClose?: boolean
   */
  openDialogMessage(options: ConfirmMessage) {

    this.dialog.open(ConfirmComponent,{
      data: options,
      disableClose: options.disableClose,
    })
  } 

}