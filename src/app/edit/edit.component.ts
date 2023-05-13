import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  actual: Person = new Person();
  constructor(private route : ActivatedRoute, public service: PersonService) {
    
    //átvesszük az URL-ből a edit/ utáni paramétert egy alertbe
    route.params.subscribe(t => {
     this.actual = service.find(t['id']);
    })

  }
}
