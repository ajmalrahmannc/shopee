import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/networking/users/users.service';
import { AlertService } from 'src/util/alert/alert.service';
import { BlockService } from 'src/util/block_ui/block.service';
import { LocalStorageService } from 'src/util/localStorage/local-storage.service';
import { ValidateUserService } from 'src/util/validateUser/validate-user.service';

@Component({
  selector: 'app-header-profile-section',
  templateUrl: './header-profile-section.component.html',
  styleUrls: ['./header-profile-section.component.scss']
})
export class HeaderProfileSectionComponent implements OnInit {

  showUserDetails: boolean = false;
  userDetails: any;

  constructor(private router: Router, private blockUi: BlockService,private validateUserSer:ValidateUserService,
   private userService: UsersService, private alert: AlertService, private localStrSer:LocalStorageService) { }

  ngOnInit(): void {
      this.validateUser();
      this.showHeader();
  }

  logout() {
    this.router.navigate(['/app-login'])
    localStorage.clear();
    this.showUserDetails = false;
  }

  showHeader(){
    this.validateUserSer.getValidateUser().subscribe((res:any) => {
      this.showUserDetails = res;
      this.validateUser();      
    })
  }

  validateUser() {

    if(this.localStrSer.checkIfuserIsLoggedIn()){
      this.showUserDetails = true;
      this.getLoggedUserDetails();
    }
  }

  getLoggedUserDetails() {
    let userId = localStorage.getItem('userId')
    this.blockUi.block();

    this.userService.getUserById(userId).subscribe((res: any) => {
      this.userDetails = res
      this.blockUi.unblock()
    }, error => {
      this.blockUi.unblock()
      this.alert.error(error)
    })

  }



}
