import { NgModule, Component  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './admin/videos/videos.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"admin", component: AdminComponent},
  {path:"admin/videos", component: VideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
