import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/util/block_ui/block-template.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    BlockUIModule.forRoot({
      delayStart: 0,
      delayStop: 300,
      template: BlockTemplateComponent
    })
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
