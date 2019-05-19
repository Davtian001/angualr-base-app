import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivateComponent?: <T>(component: T, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean;
}

@Injectable({
  providedIn: 'root',
})

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
 
  canDeactivate(  // Universal
    component: CanComponentDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean {


    return component.canDeactivateComponent ? component.canDeactivateComponent(component, route, state) : true
  }
}
// ete specifika karanq fukcian grenq menak guardi mej
// this.canDeactivateComponent(component,route,state)



// @HostListener('window:pagehide', ['$event'])
// doSomething($event) {
//   console.log('bf load',$event)
//   if(true) $event.returnValue='Your data will be lost!';
// }

// @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
//           if (!this.canDeactivate()) {
//               $event.returnValue =true;
//           }
//       }