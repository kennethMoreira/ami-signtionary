import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Auth } from '../auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users:Auth[];
  id:number;
  username:string;
  password:string;
  first_name:string;
  last_name:string;
  birthyear:string = "1990"
  email:string;
  gender:string = "M"
  phone_num:string;
  country_id:number = 589;
  role_id = 3;


  userBusqueda:any;

  constructor( private servicioAuth:AuthService, private router:Router ) { }

  ngOnInit() {
    this.servicioAuth.getUsers().subscribe( (data)=>{
      console.log(data);
      this.users = data;
    })
  }

  signup(){
    let user = new Auth();
    user.username = this.username;
    user.password = this.password;
    user.first_name = this.first_name;
    user.last_name = this.last_name;
    user.email = this.email;
    user.phone_num = this.phone_num;

    this.servicioAuth.signUp(user).subscribe(()=>{

      this.router.navigate(["/login"]);

    })

  }

}
