import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:Auth[];
  id:number;
  username:string;
  password:string;
  userBusqueda:any;

  constructor( private servicioAuth:AuthService, private router:Router) { }

  ngOnInit() {
    this.servicioAuth.getUsers().subscribe( (data)=>{
      console.log(data);
      this.users = data;
    })
  }

  login(){
    this.servicioAuth.like(this.username).subscribe(
      (data)=>{
        this.userBusqueda = data;
        this.userBusqueda.forEach(user => {
          if(user.username == this.username){
            BackendService.idUser = user.id;

            if(user.role_id == 1) {
              this.router.navigate(["/admin"]);
            }else {
              this.router.navigate(["/colaborador"]);
            }
            
            //window.location.href = '/profile';       
          }
          else{
            console.log("bad username");
          }
        }); 
        
        this.username="";
        this.password="";
      }
    )
  }

}
