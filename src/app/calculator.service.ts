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

  getGrandTotalForPerson(person: Person): number {
    return (person.subtotal()/this.subtotal) * this.grandtotal;
  }

  setGrandTotal(grandtotal: number): void {
    this.grandtotal = grandtotal;
  }

  setSubTotal(subtotal: number): void {
    this.subtotal = subtotal;
  }

  getGrandTotal(): number {
    return this.grandtotal;
  }

  getSubTotal(): number {
    return this.subtotal;;
  }

  getPerson(): Person[] {
    return this.persons;
  }

  addPerson(person): Person[] {
    this.persons.push(person);
    return this.persons;
  }

  removePerson(index: number): Person[] {
    this.persons.splice(index, 1);
    return this.persons;
  }

}
