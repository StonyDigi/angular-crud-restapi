import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from './person';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  people: Array<Person> = new Array<Person>();
  constructor(private http: HttpClient, private router: Router ) { 

   }

    load() {
    this.http.get<Array<Person>>('https://apiexample.andraskovacs.com/person')
    .subscribe(t => this.people = t);
    }

    add(p: Person) {
      this.http.post<Person>('https://apiexample.andraskovacs.com/person', p)
      .subscribe(t => {
        console.log('created: ' + t.id);
        this.router.navigate(['list']);
      });
    }

    delete(id: string) {
      this.http.delete<Person>('https://apiexample.andraskovacs.com/person/' + id)
      .subscribe(t => {
        console.log('deleted: ' + t.id);
        //delete gomb megnyomása után frissül a lista
        //this.load betöltődik akkor amikor a list component bejön
        //this.load();
        //ez a szebb frissítés, nem tölti le az összeset embert
        this.people = this.people.filter(z => z.id != t.id);
      }, error => {
        alert('hibás törlés!')
      });
    }

    update (p: Person) {
      this.http.put<Person>('https://apiexample.andraskovacs.com/person', p)
      .subscribe(t => {
        console.log('updated: ' + t.id);
        this.router.navigate(['list']);
      });
    }

    find(id: string) : Person {
      return this.people.filter(t => t.id == id)[0];
    }
  }