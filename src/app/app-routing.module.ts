import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateUserGuard } from 'src/util/route-guards/validate-user.guard';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path:'' , redirectTo:'app-login' , pathMatch:'full' },
  { path:'app-login', loadChildren : () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path:'user-dashboard' , loadChildren : () => import('./components/users/users.module').then(m => m.UsersModule) , canActivate:[ValidateUserGuard]} ,
  { path : 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
