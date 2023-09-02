import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/networking/authentication/authentication.service';
import { AlertService } from 'src/util/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  registerForm !: FormGroup;

  constructor(private fb: FormBuilder, private alert: AlertService, private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      lastName: [''],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      dob: ['', Validators.required],
      b_group: ['', Validators.required],
      age: ['',[Validators.maxLength(2)]],
      zip: [''],
      phone: ['', [Validators.required, Validators.pattern('[0-9 ]*')]]
    })
  }

  register() {
    if (this.registerForm.valid) {
      let postData = {
        "id": 1,
        "firstName": this.registerForm.controls.firstName.value,
        "lastName": this.registerForm.controls.lastName.value,
        "maidenName": "Smitham",
        "age": 50,
        "gender": "male",
        "email": "atuny0@sohu.com",
        "phone": "+63 791 675 8914",
        "username": "atuny0",
        "password": "9uQFF1Lh",
        "birthDate": "2000-12-25",
        "image": "https://robohash.org/hicveldicta.png",
        "bloodGroup": "A−",
        "height": 189,
        "weight": 75.4,
        "eyeColor": "Green",
        "hair": {
          "color": "Black",
          "type": "Strands"
        },
        "domain": "slashdot.org",
        "ip": "117.29.86.254",
        "address": {
          "address": "1745 T Street Southeast",
          "city": "Washington",
          "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
          },
          "postalCode": "20020",
          "state": "DC"
        },
        "macAddress": "13:69:BA:56:A3:74",
        "university": "Capitol University",
        "bank": {
          "cardExpire": "06/22",
          "cardNumber": "50380955204220685",
          "cardType": "maestro",
          "currency": "Peso",
          "iban": "NO17 0695 2754 967"
        },
        "company": {
          "address": {
            "address": "629 Debbie Drive",
            "city": "Nashville",
            "coordinates": {
              "lat": 36.208114,
              "lng": -86.58621199999999
            },
            "postalCode": "37076",
            "state": "TN"
          },
          "department": "Marketing",
          "name": "Blanda-O'Keefe",
          "title": "Help Desk Operator"
        },
        "ein": "20-9487066",
        "ssn": "661-64-2976",
        "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
      }

      this.auth.registerApi(postData).subscribe((res: any) => {
        this.alert.success(res.message);
        this.router.navigate(['/app-login'])
      }, (error) => {
        this.alert.error(error)
      })

    }
    else {
      this.alert.error('Please fill the required fields')
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword
  }

}
