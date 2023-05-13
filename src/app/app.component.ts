import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-restapi';

  people: Array<Person> = new Array<Person>();

  //constructor (http: HttpClient) { 
   /**fetch('https://apiexample.andraskovacs.com/person')
    .then(t=> t.json()).then(t => {
      for(let x of t) {
        console.log(x['name'])
      }
    })*/

    //get() is a fetch apira épül a háttérben, viszont van egy zsenialis tulajdonsága, hogy meg tudom mondani neki hogyan akarom visszakapni az adatom a classon keresztül
    //lokális helyi tömbbe mentettük a szerverről érkező adatokat!
    /*http.get<Person[]>('https://apiexample.andraskovacs.com/person')
    .subscribe(t => this.people = t);*/


    constructor(service: PersonService) {
      service.load();
      console.log(service.people)
    }

  }
  
