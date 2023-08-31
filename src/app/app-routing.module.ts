import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  { path:'' , redirectTo:'app-login' , pathMatch:'full' },
  { path:'app-login', loadChildren : () => import('./components/authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path:'user-dashboard' , loadChildren : () => import('./components/users/users.module').then(m => m.UsersModule)} ,
  { path : 'register', component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
