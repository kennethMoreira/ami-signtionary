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
import { AssetComponent } from './admin/asset/asset.component';
import { AgregarComponent } from './admin/videos/agregar/agregar.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HomeComponent,
    VideosComponent,
    AssetComponent,
    AgregarComponent,
    AdminComponent
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