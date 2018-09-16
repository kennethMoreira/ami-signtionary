import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../shared/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  readonly API_URL = "http://modoayuda.com/api/country";

  constructor(private http:HttpClient) {
  }

  getCountries() {
    return this.http.get(this.API_URL);
  }

  getCountries2() {
    return this.http.get<Pais[]>(this.API_URL);
  }

  addCountry(country:Pais) {
    return this.http.post(this.API_URL, country);
  }

}
