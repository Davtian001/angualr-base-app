

export interface ConfirmMessage {
  
  message: string[];
  accept: Function;
  cancel?: Function;

  checkBox?: {
    text: string,
    fn: Function,
  }
  
  disableClose?: boolean
}