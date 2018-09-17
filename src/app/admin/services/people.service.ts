import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../shared/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  readonly API_URL = "http://modoayuda.com/api/people";

  constructor(private http:HttpClient) {

}


getPeopleById(id){
  return this.http.get("http://modoayuda.com/api/person/"+id);
}

getPeople2(){
  return this.http.get<People[]>(this.API_URL);
}

addPeople(people:People){
  return this.http.post(this.API_URL, people);
}

deletePeople(id){
  return this.http.delete(this.API_URL + "/" + id);
}

patchPeople(people:People){
  return this.http.patch(this.API_URL+"/"+people.id, people);
}


countPeople(){
  return this.http.get(this.API_URL+"/count");
}


//http://modoayuda.com/api/country?_where=(name,like,~ecuador)
likePeople(busqueda:string){
  return this.http.get(this.API_URL+"?_where=(name,like,~"+busqueda+"~)");
}

}