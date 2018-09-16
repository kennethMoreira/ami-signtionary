import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject, Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import {Pipe, PipeTransform, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { BackendService } from './backend.service';
import { Router } from '@angular/router';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  
  transform(value: any, url: any): any {
      if (value && !url) {
          const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
          let match = value.match(regExp);
          if (match && match[2].length == 11) {
              console.log(match[2]);
              let sepratedID = match[2];
              let embedUrl = '//www.youtube.com/embed/' + sepratedID;
              return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
          }
       }
     }
  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private router:Router) {}
  isLogged = false;
  ngOnInit() {
    this.isLogged = BackendService.isLogged();
  }

  logout() {
    BackendService.idUser = "";
    this.isLogged = false;

    this.router.navigate(["/home"]);
  }

}