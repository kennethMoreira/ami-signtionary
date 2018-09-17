import { NgModule, Component  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './admin/videos/videos.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './shared/auth.guard';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { AssetComponent } from './asset/asset.component';
import { CountryComponent } from './country/country.component';
import { PeopleComponent } from './people/people.component';
import { PermissionComponent } from './permission/permission.component';
import { PersonComponent } from './person/person.component';
import { SignsetComponent } from './signset/signset.component';
import { RequestComponent } from './request/request.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"admin", component: AdminComponent, canActivate: [AuthGuard]},
  {path:"admin/videos", component: VideosComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path:"colaborador", component: ColaboradoresComponent, canActivate: [AuthGuard]},
  {path:"asset", component: AssetComponent, canActivate: [AuthGuard]},
  {path:"country", component: CountryComponent, canActivate: [AuthGuard]},
  {path:"people", component: PeopleComponent, canActivate: [AuthGuard]},
  {path:"permission", component: PermissionComponent, canActivate: [AuthGuard]},
  {path:"person", component: PersonComponent, canActivate: [AuthGuard]},
  {path:"signset", component: SignsetComponent, canActivate: [AuthGuard]},
  {path:"request", component: RequestComponent, canActivate: [AuthGuard]},
  {path:"role", component: RoleComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
