import { Component, OnInit } from '@angular/core';
import { Videos } from '../../shared/videos';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  video:Videos[];
  nombreVideo:string ;
  urlVideo:string;
  videoEncontrado:any;
  urlBuscada:string;
videoN:any;

  constructor(private servicioVideo:VideosService) { }

  ngOnInit() {
  }


  agregarVideo(){

    let video = new Videos();

    let urlCargada = this.urlVideo;
    let patron = "https://www.youtube.com/watch?v=";
    let nuevoPatron = "https://www.youtube.com/embed/";
  
    urlCargada = urlCargada.replace(patron, nuevoPatron);

    video.sign_text = this.nombreVideo;
    video.url = urlCargada;
    video.status="0";
    video.observations=" ";
    video.sign_set_id= 1;
    video.person_id = 1;

    let cadena = this.urlVideo.substr(0,32);

    if(cadena==patron){
      this.servicioVideo.buscarBD(this.urlVideo).subscribe(
        (data)=>{
          if(data.length>0){
            alert("El vídeo ya existe en nuestra BD");
          }else{
            this.servicioVideo.addVideo(video).subscribe(
              (data)=>{
                console.log(data);
                window.location.replace("/videos");
              }
            )
          }  
        }
      )

    }else{
      alert("DEBE SER UN VIDEO DE YOUTUBE");
    }
    

    


  }

}
