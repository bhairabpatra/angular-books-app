import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: AuthService
  ) {

  this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })

  }

  ngOnInit(): void {
      if(this.crudService.isLogedin){
        this.router.navigateByUrl('/home')
      }
  }

  onSubmit(): any {
    this.crudService.isLogin(this.loginForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/home'))
      }, (err) => {
        console.log(err);
    });
  }




}


