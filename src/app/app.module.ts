import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent, SafePipe } from './app.component';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

//AngularFireStuff
import { AngularFireModule} from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';

//PRINCIPAL
import { HomeComponent } from './home/home.component';

//ADMIN
import { VideosComponent } from './admin/videos/videos.component';
import { AssetComponent } from './asset/asset.component';
import { AgregarComponent } from './admin/videos/agregar/agregar.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { CountryComponent } from './country/country.component';
import {PeopleComponent} from './people/people.component';
import {PermissionComponent} from './permission/permission.component';
import {PersonComponent} from './person/person.component';
import {SignsetComponent} from './signset/signset.component';
import {RequestComponent} from './request/request.component';
import {RoleComponent} from './role/role.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HomeComponent,
    VideosComponent,
    AssetComponent,
    AgregarComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    ColaboradoresComponent,
    CountryComponent, 
    PeopleComponent,
    PermissionComponent,
    PersonComponent,
    SignsetComponent,
    RequestComponent,
    RoleComponent,
    MenuAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }