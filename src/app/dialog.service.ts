import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  confirm(message?: string): Observable<boolean>{
    return of(window.confirm(message || 'Are you sure')) // true or false (compiling stop )
  }

}
