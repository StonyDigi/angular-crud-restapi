import { Component } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public service: PersonService, private router: Router) {
    service.load();
  }

  edit(id: string) {
    this.router.navigate(['edit', id]);
  }

}
