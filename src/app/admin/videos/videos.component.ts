import { Component, OnInit, Input } from '@angular/core';
import { Videos } from '../shared/videos';
import { VideosService } from '../services/videos.service';
import { People } from '../shared/people';
import { PeopleService } from '../services/people.service';
import { Asset } from '../shared/asset';
import { AssetService } from '../services/asset.service';



import { Router } from '@angular/router'; 

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  video:Videos[];
  people:People[];
  asset:Asset[];


  //Mostrar componentes
  showAprobar: boolean = true;
  showAgregar: boolean = false;

  nombreVideo:string ;
  videoAEditar:Videos;
  videosBusqueda:any;
  
  nombreVideoEditado:string;
  urlVideo:string;

  paginacion:number;
  itemsPorPagina:number;
  paginaAnterior:number;
  paginaActual:number;
  paginaSiguiente:number;

  $play = "https://www.youtube.com/embed/diyavpLFYXI";

  //REPRODUCIR
  urlPlay: string;
  videoReproducir: Videos;
 

   //AGREGAR VIDEO EN MODAL
   videoObjModal: Videos;


  feedbackEditado:string;

  
  cuantasFilas: number;
  buscarvideo:string;
  constructor(private servicioVideo:VideosService, 
    private servicioPeople:PeopleService, 
    private servicioAsset:AssetService,
    private router: Router) {

   }

  ngOnInit() {
    this.itemsPorPagina=15;
    this.calcularPaginacion();
    
    this.listarVideos();
    this.paginaAnterior=0;
    this.paginaActual=1;
    this.paginaSiguiente=2;

   
    this.servicioPeople.getPeople2().subscribe( (data)=>{ //SUSCRIBIRSE PARA LLEGAR INFOMACION
      console.log(data);
      this.people = data;
    }) 



  }

  
  listarVideos(){
    this.servicioVideo.getVideos(this.paginaActual,this.itemsPorPagina).subscribe(
      (data)=>{console.log(data);
        this.video = data;
      })
  }

  busquedaVideo(){
    this.servicioVideo.likeVideo(this.buscarvideo).subscribe(
      (data)=>{
        
        this.videosBusqueda = data;
        this.buscarvideo="";
      }
    )
  }

  agregarVideo(){
    console.log(this.nombreVideo);

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

    this.servicioVideo.addVideo(video).subscribe(
      (data)=>{
        console.log(data);
        this.listarVideos();
      }
    )
  }

  editarVideo(video:Videos){
    console.log(video);
    this.videoAEditar=video;
    this.videoAEditar.id=video.id;
    this.nombreVideoEditado=video.sign_text;

    this.servicioVideo.countVideo().subscribe(
      (count)=>{console.log(count);
      }
    )
  }

  feedback(video:Videos){
    console.log(video);
    this.videoAEditar=video;
    this.videoAEditar.id=video.id;
    this.feedbackEditado=video.observations;
    this.urlVideo=video.url;

    this.servicioVideo.countVideo().subscribe(
      (count)=>{console.log(count);
      }
    )

  }

  patchVideos(){
    console.log(this.nombreVideoEditado);
    this.videoAEditar.sign_text = this.nombreVideoEditado;
    this.servicioVideo.patchVideo(this.videoAEditar).subscribe(
      (data)=>{
        console.log(data);
        this.listarVideos();
      }
    )
  }

  feedVideos(){

    console.log(this.feedbackEditado);
    
    let searchInyection = this.feedbackEditado;
    let changePhrase = searchInyection.replace(/[^a-z0-9 ]/gi,'');
    
    if(searchInyection == changePhrase){
      this.videoAEditar.observations = this.feedbackEditado; // Coloco el nuevo feedback
      this.servicioVideo.patchVideo(this.videoAEditar).subscribe( //edito el nuevo feedback
      (data)=>{
        console.log(data);
        this.listarVideos();
        }
      )
    } else {
      alert("Existe caracteres que puede dañar la base de datos en el texto ingresado");
    }


  }


  aprobar(video:Videos){
    
    let asset = new Asset();
    asset.name = video.url;
    
    this.servicioAsset.addAsset(asset).subscribe(
      (data)=>{ 
        console.log(data);
        this.listarVideos();
      }
    )

    this.eliminarVideo(video); //se elimina el video de la bd request
    alert("El vídeo se ha agregado a la base de datos (asset)");

  }

  eliminarVideo(video:Videos){
    console.log(video);
    this.servicioVideo.deleteVideo(video).subscribe(
    (data)=>{
      console.log(data);
      this.listarVideos();
    }
    )
  }

  calcularPaginacion(){
    this.servicioVideo.countVideo().subscribe(
      (data)=>{console.log(data);
        this.cuantasFilas = data[0].no_of_rows;
        console.log(this.cuantasFilas);
        
      this.paginacion=Math.ceil(this.cuantasFilas/this.itemsPorPagina);
      console.log(this.paginacion);
  
    })
  
  }
  
  SiguientePagina(){
    if(this.paginaSiguiente<=this.paginacion){
  
      this.paginaAnterior++;
      this.paginaActual++;
      this.paginaSiguiente++;
    }
  this.listarVideos();
  }
  AnteriorPagina(){
    if(this.paginaAnterior>0){
      this.paginaAnterior--;
      this.paginaActual--;
      this.paginaSiguiente--;
      this.listarVideos();
    }
    
    }
    


 //FUNCIÓN REPRODUCIR
 reproducir(url: string, video:Videos){
  var iframe = document.getElementById('video');
  console.log("yeeeeiiii");
  
  iframe.setAttribute("src", url+"?autoplay=1");


  // id:number;
  // sign_text:string;
  // url:string;
  // status:string;
  // observations:string;
  // sign_set_id:number;
  // person_id:number; 

  this.videoObjModal = new Videos;
  this.videoObjModal = video;

}

aprobar2(){
  

  let asset = new Asset();
  asset.name = this.videoObjModal.url;
  
  this.servicioAsset.addAsset(asset).subscribe(
    (data)=>{ 
      console.log(data);
      console.log("HECHO")
      this.listarVideos();
    }
  )


 // var modalVideo = document.getElementById('modalReproducirVideo');
 // modalVideo.setAttribute("display", "none");
 this.eliminarVideo(this.videoObjModal); //se elimina el video de la bd request
  alert("El vídeo se ha agregado a la base de datos.");

}

feedback2(){
  console.log(this.videoObjModal);
  this.videoAEditar=this.videoObjModal;
  this.videoAEditar.id=this.videoObjModal.id;
  this.feedbackEditado=this.videoObjModal.observations;
  this.urlVideo=this.videoObjModal.url;

  this.servicioVideo.countVideo().subscribe(
    (count)=>{console.log(count);
    }
  )

}


eliminarVideo2(){
  console.log(this.videoObjModal);
  this.servicioVideo.deleteVideo(this.videoObjModal).subscribe(
  (data)=>{
    console.log(data);
    this.listarVideos();
  }
  )
}





    //FUNCIÓN CERRAR REPRODUCTOR DE VIDEO
    cerrar(){
      var iframe = document.getElementById('video');
      iframe.setAttribute("src", "");
    }
    

   //Mostrar/ocultar componentes
   mostrarAprobar() {

    //alert("test");

    this.showAprobar = true;
    console.log(this.showAprobar);
}

mostarAgregar(){
  this.showAprobar = false;
  console.log(this.showAgregar);
}


  }
  