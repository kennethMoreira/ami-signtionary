import { NgModule, Component  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './admin/videos/videos.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"admin", component: AdminComponent, canActivate: [AuthGuard]},
  {path:"admin/videos", component: VideosComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
