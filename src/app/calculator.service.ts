import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class CalculatorService {

  grandtotal: number;
  subtotal: number;
  persons: Person[];

  constructor() { 
    this.persons = new Array<Person>();
    this.subtotal = 0;
    this.grandtotal = 0;
  }

  setGrandTotal(grandtotal: number): void {
    this.grandtotal = grandtotal;
  }

  setSubTotal(subtotal: number): void {
    this.subtotal = subtotal;
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
