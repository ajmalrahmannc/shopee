import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/networking/authentication/authentication.service';
import { AlertService } from 'src/util/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  loginForm !: FormGroup;

  constructor(private fb : FormBuilder,private alert : AlertService , private auth:AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm (){
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login(){

    if(this.loginForm.valid) {

      let postData = {
        'email': this.loginForm.controls.email.value,
        'password': this.loginForm.controls.password.value
      }
      
      this.auth.loginApi(postData).subscribe((res:any) => {
        this.alert.success("Login Success");
        this.router.navigate(['user-dashboard'])
      },(error) => {
        this.alert.error('Invalid Username or Password')
      })

    }
    else {
      this.alert.error('Please fill the required fields')
    }
  }

}
