import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject, Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import {Pipe, PipeTransform, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  searchterm: string;
  startAt = new Subject();
  endAt = new Subject();
  clubs;
  allclubs;
  lastKeypress: number = 0;
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private afs: AngularFirestore, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getallclubs().subscribe((clubs) => {
      this.allclubs = clubs;
      
  })

  combineLatest(this.startobs, this.endobs).subscribe((value) => {
    this.firequery(value[0], value[1]).subscribe((clubs) => {
        this.clubs = clubs;
        this.allclubs = clubs;
      })
    })
  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 200) {
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q+"\uf8ff")
    }
    this.lastKeypress = $event.timeStamp
  }

  firequery(start, end) {
    return this.afs.collection('palabras', ref => ref.limit(1).orderBy('descripcion').startAt(start).endAt(end)).valueChanges();
  }

  getallclubs() {
    
    return this.afs.collection('palabras', ref => ref.limit(1).orderBy('descripcion')).valueChanges();
  }


}
