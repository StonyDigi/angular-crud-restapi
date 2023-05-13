import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
  actual: Person = new Person();
  constructor(public service: PersonService) {

  }
}
