import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class CalculatorService {

  persons: Person[];

  constructor() { 
    this.persons = new Array<Person>();
  }

  get(): Person[] {
    return this.persons;
  }

  add(person): Person[] {
    this.persons.push(person);
    return this.persons;
  }

  remove(index: number): Person[] {
    this.persons.splice(index, 1);
    return this.persons;
  }

}
