import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Asset } from '../shared/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  readonly API_URL = "http://modoayuda.com/api/asset";

  constructor(private http:HttpClient) { }

  addAsset(asset:Asset){
    return this.http.post(this.API_URL, asset);
    }
}
