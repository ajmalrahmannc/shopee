import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileSectionComponent } from './header-profile-section/header-profile-section.component';



@NgModule({
  declarations: [
    HeaderProfileSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderProfileSectionComponent
  ]
})
export class SharedModule { }
