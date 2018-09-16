import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../shared/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  readonly API_URL = "http://modoayuda.com/api/people";

  constructor(private http:HttpClient) {
  }

 
  getPersonas2() {
    return this.http.get<Persona[]>(this.API_URL);
  }
  getPerson(p:number, size:number) {
    return  this.http.get<Persona[]>(this.API_URL+"?_p="+p+"&_size="+size);  
    }

  addPersona(people:Persona) {
    return this.http.post(this.API_URL, people);
  }
  deletePersona(id){
    return this.http.delete("http://modoayuda.com/api/people/" + id);
  }
  patchPerson(people:Persona){
    return this.http.patch(this.API_URL+"/"+people.id, people);
  }
  countPerson(){
    return this.http.get(this.API_URL+"/count");
  }
  like(busqueda:string){
    return this.http.get(this.API_URL+"?_where=(name,like,~"+busqueda+")");
  }
}
