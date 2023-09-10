import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateUserGuard } from 'src/util/route-guards/validate-user.guard';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';

const routes: Routes = [
  { path:'' , component:UsersDashboardComponent , canActivate:[ValidateUserGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
