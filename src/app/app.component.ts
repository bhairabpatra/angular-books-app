import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-app';
  checkLogin:boolean =false;
  constructor(
    private router: Router,
    private Logidin: AuthService
  ) {
    this.loginCheck()
   }

  ngOnInit(): void {
      console.log("haiiiiiiii" +  this.Logidin.isLogedin())
      this.loginCheck()
  }

  loginCheck(){

    if(this.Logidin.isLogedin()){

      this.checkLogin = true
    }
    else{

      this.checkLogin = false
    }
  }
  logout(){
    this.Logidin.logout()
    this.loginCheck()
    this.router.navigateByUrl('/login')

  }
}
