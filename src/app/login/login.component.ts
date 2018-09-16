import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Auth } from '../auth';

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

  constructor( private servicioAuth:AuthService ) { }

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
        this.userBusqueda.forEach(element => {
          if(element.username == this.username){
            window.location.href = '/profile';       
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
