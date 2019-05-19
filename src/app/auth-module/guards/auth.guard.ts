import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild, CanLoad, NavigationExtras } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(

    route: ActivatedRouteSnapshot, // Содержит будущий маршрут , который будет активироваться 
    state: RouterStateSnapshot): Promise<boolean> { // RouterStateSnapshot содержит будущее RouterState приложения, вы должны пройти через проверку охраны.
    let url: string = state.url;
    return this.signIn(url) as Promise<boolean>;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state)
  }

  canLoad(route: Route): Promise<boolean>{
    let loadUrl = `/${route.path}`;
    return this.signIn(loadUrl);
  }


  signIn(url: string): Promise<boolean> {

    return new Promise(resolve => {

      this.auth.isLogginedStatus().toPromise().then(state => {

        if (state) return resolve(state);
        
        this.auth.redirectUrl = url;
        
        // const sessionId: number = 1579256697423;
        // const navigationExtras: NavigationExtras = {
        //   queryParams: { 'sesion_id': sessionId },
        //   fragment: 'Davit UID'}
        // this.router.navigate(['/','auth', 'login'],navigationExtras);
	    	console.log('​ rejects', url)        
        this.router.navigate(['/','auth', 'login']);
        resolve(state);
      })
    })

  }















  // constructor(private authService: AuthService,private router: Router){}

  // canActivate(
  //   next: ActivatedRouteSnapshot,

  //   state: RouterStateSnapshot): boolean {
  //   let url: string = state.url; // переноправление 
  //   return this.checkLogin(url);
  // }

  // canActivateChild(
  //   route: ActivatedRouteSnapshot,

  //   state: RouterStateSnapshot): boolean {
  //     return this.canActivate(route,state)
  //   }


  // checkLogin(url: string): boolean {
  //   if(this.authService.isLoggined) { return true }

  // 	console.log('​AuthGuard -> constructor -> url', url)
  //    // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;
  //   this.router.navigate(['/login'])

  //   return false

  // }

}



