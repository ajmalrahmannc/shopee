import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/util/block_ui/block-template.component';


@NgModule({
    declarations: [
        UsersDashboardComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        BlockUIModule.forRoot({
          delayStart: 0,
          delayStop: 300,
          template: BlockTemplateComponent    
        })
    ]
})
export class UsersModule { }
