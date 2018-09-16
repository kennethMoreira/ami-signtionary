import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = "http://modoayuda.com/api/person";

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<Auth[]>(this.API_URL);
  }

  like(username:string){
    return this.http.get(this.API_URL+"?_where=(username,like,~"+username+")");
  }

  signUp(user:Auth){
    return this.http.post(this.API_URL, user);
  }

}
