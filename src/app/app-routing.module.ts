import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {RequestComponent} from './request/request.component'
import { CreateRequestComponent } from './create-request/create-request.component';
import { RegisterComponent } from './register/register.component';
import { UserPageComponent } from './user-page/user-page.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login/register',
    component: RegisterComponent,
  },
  {
    path: 'login/user',
    component: UserPageComponent,
  },
  {
    path:'requests/:id',
    component: RequestComponent,
  },
  {
    path:'createRequest',
    component: CreateRequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
