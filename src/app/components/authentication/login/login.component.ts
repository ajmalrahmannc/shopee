import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/networking/authentication/authentication.service';
import { AlertService } from 'src/util/alert/alert.service';
import { BlockService } from 'src/util/block_ui/block.service';
import { LocalStorageService } from 'src/util/localStorage/local-storage.service';
import { ValidateUserService } from 'src/util/validateUser/validate-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  loginForm !: FormGroup;

  constructor(private fb: FormBuilder, private alert: AlertService, 
    private auth: AuthenticationService, private router: Router, 
    private blockUi: BlockService, private localStrSer:LocalStorageService,
    private validateUser:ValidateUserService) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }


  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  login() {

    this.blockUi.block()

    if (this.loginForm.valid) {

      let postData = {
        'username': this.loginForm.controls.userName.value,
        'password': this.loginForm.controls.password.value
      }

      this.auth.loginApi(postData).subscribe((res: any) => {
        this.blockUi.unblock()
        this.alert.success("Login Success");
        this.router.navigate(['user-dashboard']);
        this.localStrSer.setUserId(res.id)
        this.validateUser.setValidateUser(true);

      }, (error: any) => {
        this.blockUi.unblock()
        this.alert.error('Invalid Username or Password')
      })

    }
    else {
      this.alert.error('Please fill the required fields')
      this.blockUi.unblock();
    }
  }

}
