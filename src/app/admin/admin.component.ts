import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../admin/services/people.service';
import { People } from '../admin/shared/people';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  people: People[];

  constructor(private servicioPeople:PeopleService) { }

  ngOnInit() {
    
    this.servicioPeople.getPeople2().subscribe( (data)=>{ //SUSCRIBIRSE PARA LLEGAR INFOMACION
      console.log(data);
      this.people = data;
    }) 

    
  }

}
