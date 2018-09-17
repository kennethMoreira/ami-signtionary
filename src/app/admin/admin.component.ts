import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../admin/services/people.service';
import { People } from '../admin/shared/people';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  people: any;

  constructor(private servicioPeople:PeopleService) { }

  ngOnInit() {
    let id = localStorage.getItem("idUser");
    this.servicioPeople.getPeopleById(id).subscribe( (data)=>{ //SUSCRIBIRSE PARA LLEGAR INFOMACION
      console.log(data);
      this.people = data;
    }) 

    
  }

}
