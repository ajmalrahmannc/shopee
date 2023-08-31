import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/networking/authentication/authentication.service';
import { AlertService } from 'src/util/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword:boolean = false;
  registerForm !: FormGroup;

  constructor(private fb : FormBuilder, private alert : AlertService, private auth : AuthenticationService, private router : Router) { }

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = this.fb.group({
      firstName : ['',[Validators.required,Validators.pattern('[A-Za-z ]*')]],
      lastName : [''],
      userName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',Validators.required],
      city : ['',Validators.required],
      street : ['',Validators.required],
      houseNo : [''],
      zip : [''],
      phone : ['',[Validators.required,Validators.pattern('[0-9 ]*')]]
    })
  }

  register(){
    if(this.registerForm.valid){
      let postData =  {
        firstName: this.registerForm.controls.firstName.value,
        lastName: this.registerForm.controls.lastName.value,
        age: 25,
        /* other user data */
      }

      this.auth.registerApi(postData).subscribe((res:any) => {
        this.alert.success(res.message);
        this.router.navigate(['/app-login'])
      },(error) => {
        this.alert.error(error)
      })
      
    }
    else {
      this.alert.error('Please fill the required fields')
    }
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword
  }

}
