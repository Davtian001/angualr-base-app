import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggined: boolean = false;
  redirectUrl: string;

  constructor() { }


  isLogginedStatus(): Observable<boolean> {
    return of(this.isLoggined);
  }

  logIn(): Observable<boolean>{
    return of(true).pipe(
      delay(100),
      tap((state) => { this.isLoggined = state; return state})
    )
  }


  logOut(): Observable<boolean> {
    this.isLoggined = false;

    return of(false).pipe(
      delay(100),
      tap((state) => { this.isLoggined = state; return state})
    )
  }
}
