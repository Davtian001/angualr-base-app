import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  message: string;
  

  constructor(
    public authService: AuthService,
    public router: Router,
    ){}


  ngOnInit(){
    this.setMessage()
  }

  setMessage(): void{
    this.message = `Logged ${this.authService.isLoggined ? 'in': 'out'}`
  }

 
  logIn() {
    this.message = 'Trying to log in ...';
 
    this.authService.logIn().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggined) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        // console.log('login ->.redirectUrl ',  this.authService.redirectUrl )
       
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        


        // Redirect the user
        let redirectUrl = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/heroes-list';
        this.router.navigateByUrl(redirectUrl,navigationExtras);
      }
    });
  }
 
  logout() {
    this.authService.logOut();
    this.setMessage();
  }
}



