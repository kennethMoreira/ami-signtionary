import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';
import {Request} from '../shared/request';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  tablaActual:string;

//para listar y agregar
  objectArray:any;
  id:number;
  sign_text:string;
  url:string;
  status:string;
  observations:string;
  sign_set_id:number;
  person_id:number;
  
  //para buscar
  objectBusqueda:any;
  attributoBusqueda="sign_text";
  
// para editar
  Editobject:Request;  
  Editsign_text:string;
    Editurl:string;
    Editstatus:string;
    Editobservations:string;
    Editsign_set_id:number;
    Editperson_id:number;

// para paginar
  paginacion:number;
  itemsPorPagina:number;
  paginaAnterior:number;
  paginaActual:number;
  paginaSiguiente:number;  
  cuantasFilas: number;
  buscar:string;



    constructor(private servicio: MainService) { }

  ngOnInit() {
    this.tablaActual="request";
    this.itemsPorPagina=10;
this.calcularPaginacion();   
this.listar();
this.paginaAnterior=0;
this.paginaActual=1;
this.paginaSiguiente=2;



  }


listar(){
  this.servicio.get(this.paginaActual,this.itemsPorPagina, this.tablaActual).subscribe(
    (data)=>{console.log(data);
      this.objectArray = data;
  })
}

busqueda(){
  this.servicio.like(this.buscar,this.tablaActual,this.attributoBusqueda).subscribe(
    (data)=>{
      this.objectBusqueda = data;
      this.buscar="";

    }
  )

}

agregar(){
  
  let elemento = new Request();
  
  elemento.sign_text= this.sign_text;
  elemento.url = this.url;
  elemento.status = this.status;
  elemento.observations = this.observations;
  elemento.sign_set_id = this.sign_set_id;
  elemento.person_id = this.person_id;
  


  this.servicio.add(elemento,this.tablaActual).subscribe((data)=>{
    console.log(data);
    this.listar();

   
  })

  
  this.sign_text                = "";
  this.url                = "";
  this.status                = "";
  this.observations                = "";
  this.sign_set_id                = 0;
  this.person_id                = 0;


}
editar(objeto:Request){
  console.log(objeto);

  this.Editobject=objeto;
  this.Editsign_text=objeto.sign_text;
  this.Editurl=objeto.url;
  this.Editstatus = objeto.status;
  this.Editobservations = objeto.observations;
  this.Editsign_set_id = objeto.sign_set_id;
  this.Editperson_id = objeto.person_id;
 


  this.servicio.count(this.tablaActual).subscribe(
    (count)=>{console.log(count);
    
    })

}
patch(){
  console.log(this.Editobject);
  this.Editobject.sign_text=this.Editsign_text;
  this.Editobject.url=this.Editurl;
  this.Editobject.status=this.Editstatus;
  this.Editobject.observations=this.Editobservations;
  this.Editobject.sign_set_id=this.Editsign_set_id;
  this.Editobject.person_id=this.Editperson_id;
  
  ;

  
  this.servicio.patch(this.Editobject,this.tablaActual).subscribe(
    (data)=>{
      console.log(data);
      this.listar();
    }
  )

}
eliminar(objeto:Request){
  console.log(objeto);
  this.servicio.delete(objeto,this.tablaActual).subscribe(
    (data)=>{
      console.log(data);
    this.listar();
    }

  )
}


calcularPaginacion(){
  this.servicio.count(this.tablaActual).subscribe(
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
this.listar();
}
AnteriorPagina(){
  if(this.paginaAnterior>0){
    this.paginaAnterior--;
    this.paginaActual--;
    this.paginaSiguiente--;
    this.listar();
  }
  
  }
}

