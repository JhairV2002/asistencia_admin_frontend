import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  constructor(private personService: PersonService) {}

  personList: Person[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  /**
   * findAll
   */
  public findAll(): void {
    this.personService.findAll().subscribe((res) => (this.personList = res));
  }
  /**
   * findByName
   */
  public findByName(term: string): void {
    if (term.length >= 2) {
      this.personService
        .findByName(term)
        .subscribe((res) => (this.personList = res));
    }
    if (term.length === 0) this.findAll();
  }
}
