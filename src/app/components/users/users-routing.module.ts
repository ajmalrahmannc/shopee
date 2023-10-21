import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateUserGuard } from 'src/util/route-guards/validate-user.guard';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductsByCategoryComponent } from './view-products-by-category/view-products-by-category.component';

const routes: Routes = [
  { path: '' , component:UsersDashboardComponent , canActivate:[ValidateUserGuard]},
  { path: 'view-product/:id', component:ViewProductComponent },
  { path: 'view-products-by-category/:name', component:ViewProductsByCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
