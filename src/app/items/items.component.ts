import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalculatorService } from '../calculator.service';
import { Person } from '../person';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  persons: Person[];
  person: Person;
  item: Item;
  items: Item[];
  personIndex: number;



  constructor(private _cs: CalculatorService, private router: Router) { 
    this.item = new Item();
    this.items = new Array<Item>();
    this.persons = this._cs.getPerson();
    this.personIndex = 0;
    this.person = this.persons[this.personIndex];
  }

  ngOnInit() {
  }

  add() {
    this.items.push(this.item);
    this.item = new Item();
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  done() {
    this.persons[this.personIndex].items = this.items;
    if (this.personIndex != (this.persons.length - 1)) {
      this.person = this.persons[++this.personIndex];
      this.items = new Array<Item>();
      this.item = new Item();
      console.log(this._cs.getPerson());
    } else {
      console.log('All persons done.');
      console.log(this._cs.getPerson());
    }
    
  }

  grandtotal(person: Person): number {
    return this._cs.getGrandTotalForPerson(person);
  }

}
