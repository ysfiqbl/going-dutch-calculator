import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persons: Person[];
  name: string;

  constructor() { 
    this.persons = new Array<Person>();
    this.name = '';
  }

  ngOnInit() {
  }

  add(): void {
    let p = new Person();
    p.name = this.name;
    this.persons.push(p);
    this.name = '';
  }

  remove(index: number): void {
    this.persons.splice(index, 1);
  }

}
