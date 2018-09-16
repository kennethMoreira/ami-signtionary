import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../shared/request';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  readonly API_URL = "http://modoayuda.com/api/";

  constructor(private http:HttpClient) {
   }

  getById(p:number, size:number, idPersona:number,status:number, tablaActual:string){
    //return this.http.get(this.API_URL+tablaActual+"?_p="+p+"&_size="+size+"/findOne?_where=(person_id,eq,"+idPersona+")");
    //return this.http.get(this.API_URL+tablaActual+"?_p="+p+"&_size="+size+"?_where=(person_id,eq,"+idPersona+")");
    return this.http.get(this.API_URL+tablaActual+"?_p="+p+"&_size="+size+"&_where=(person_id,eq,"+idPersona+")~and(status,eq,"+status+")");

    //http://www.modoayuda.com/api/request?_where=(person_id,eq,1)
  }

  get(p:number, size:number, tabla:string) {
    return  this.http.get<Request[]>(this.API_URL+tabla+"?_p="+p+"&_size="+size);  
  }

  addRequest(request:Request) {
    return this.http.post(this.API_URL+"request", request);
  }

  countRequest(num:number, status:number){
    return this.http.get(this.API_URL+"request/count?_where=(person_id,eq,"+num+")~and(status,eq,"+status+")");
  }
  /*like(tablaActual:string, busqueda:string){
    return this.http.get(this.API_URL+"request?_where=(sign_text,like,~"+busqueda+")");
  }*/
}
