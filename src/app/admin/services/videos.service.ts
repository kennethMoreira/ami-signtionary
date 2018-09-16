import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Videos} from '../shared/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  readonly API_URL = "http://modoayuda.com/api/request";

  constructor(private http:HttpClient) { }


  getVideos(p:number, size:number){
    return this.http.get<Videos[]>(this.API_URL+"?_p="+p+"&_size="+size);  
  }

  buscarBD(videoBd:string){
    return this.http.get<Videos[]>(this.API_URL+"?_where=(url,eq,"+videoBd+")");
 
  }
  existe(urlN:string,id:Number){
    return this.http.get(this.API_URL+"?_=(url,eq,"+urlN+")/exists");

  }

  addVideo(videos:Videos){
    return this.http.post(this.API_URL, videos);
  }

  patchVideo(videos:Videos){
    return this.http.patch(this.API_URL+"/"+videos.id, videos);
  }

  deleteVideo(videos:Videos){
    return this.http.delete(this.API_URL+"/"+videos.id);
  }

  countVideo(){
    return this.http.get(this.API_URL+"/count");
  }

  likeVideo(busquedaVideo:string){
    return this.http.get(this.API_URL+"?_where=(sign_text,like,~"+busquedaVideo+"~)");
  }

}
