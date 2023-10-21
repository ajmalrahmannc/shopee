import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersRoutingModule } from './users-routing.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from 'src/util/block_ui/block-template.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';


@NgModule({
    declarations: [
        UsersDashboardComponent,
        ViewProductComponent,
        ViewProductsByCategoryComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        NgbCarouselModule,
        NgxPaginationModule,
        BlockUIModule.forRoot({
          delayStart: 0,
          delayStop: 300,
          template: BlockTemplateComponent    
        })
    ]
})
export class UsersModule { }
