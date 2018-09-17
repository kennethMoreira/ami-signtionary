import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from '../services/colaboradores.service';
import { Request } from '../shared/request';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Persona} from '../shared/persona';


@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  request:any;
  id:number;
  sign_text:string;
  url:string;
  status:string;
  observations:string;
  sign_set_id:number;
  person_id:number;

  requestBusqueda:any;

  paginacion:number;
  itemsPorPagina:number;
  paginaAnterior:number;
  paginaActual:number;
  paginaSiguiente:number;
  
  cuantasFilas: number;
  buscarrequest:string;
  tablaActual: string;
  statusActual: number;
  idActual: number;

  

  constructor(private servicioColaborador:ColaboradoresService) { }

  ngOnInit() {
    this.itemsPorPagina=10;
    this.tablaActual="request"; 
    this.paginaAnterior=0;
    this.paginaActual=1;
    this.paginaSiguiente=2;
    
  

  }

  listarRequest(){
    this.servicioColaborador.getById(this.paginaActual,this.itemsPorPagina,2,this.statusActual,this.tablaActual).subscribe(
      (data)=>{console.log(data);
        this.request = data;
    })
  }

  statusMe(num: number){
    this.statusActual = num;
    this.calcularPaginacion();
    this.listarRequest();

  }
  calcularPaginacion(){
    this.servicioColaborador.countRequest(2, this.statusActual).subscribe(
      (data)=>{console.log(data);
        this.cuantasFilas = data[0].no_of_rows;
        console.log("filas"+this.cuantasFilas);
        
      this.paginacion=Math.ceil(this.cuantasFilas/this.itemsPorPagina);
      console.log("paginacio"+this.paginacion);
  
    })
  
  }
  
  SiguientePagina(){
    if(this.paginaSiguiente<=this.paginacion){
  
      this.paginaAnterior++;
      this.paginaActual++;
      this.paginaSiguiente++;
    }
  this.listarRequest();
  }
  AnteriorPagina(){
    if(this.paginaAnterior>0){
      this.paginaAnterior--;
      this.paginaActual--;
      this.paginaSiguiente--;
      this.listarRequest();
    }
    } 
    agregar(){

        //var youtubeUrl = require('youtube-url'); //error TS2304: Cannot find name 'require'. 
        let urlCargada = this.url;

        //if(youtubeUrl.valid(urlCargada)) //Falta validación de URL
        if(urlCargada)
        {
          let patron = "https://www.youtube.com/watch?v=";
          let nuevoPatron = "https://www.youtube.com/embed/";
          urlCargada = urlCargada.replace(patron, nuevoPatron);
          let solicitud = new Request();
          solicitud.sign_text = this.sign_text;
          solicitud.url = urlCargada;
          solicitud.status = "0";
          solicitud.observations = "";
          solicitud.sign_set_id = 1;
          solicitud.person_id = 2;
      
          this.servicioColaborador.addRequest(solicitud).subscribe((data)=>{
            console.log(data);
      
            this.listarRequest();
            })
          
      
          this.sign_text="";
          this.url="";
          this.status="0";
          this.observations="";
          this.sign_set_id=0;
          this.person_id=0;
      
        }
        else
        {
          // this.sign_text="";
          this.url = "[Enlace no válido]";
          this.status="0";
          this.observations="";
          this.sign_set_id=0;
          this.person_id=0;
        }

      }

  
}
