import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
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



  constructor(
    private _cs: CalculatorService, 
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    
  }

  ngOnInit() {
    this.item = new Item();
    this.items = new Array<Item>();
    this.persons = this._cs.getPerson();

    this.route.params.forEach((params: Params) => {
      console.log(params);
      this.personIndex = +params['index'];
      this.person = this.persons[this.personIndex];      
    });
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
    this.personIndex++;
    this.item = new Item();
    this.items = new Array<Item>();
    console.log(this.persons);
    if (this.personIndex < this.persons.length) {
      this.router.navigateByUrl(`/${this.personIndex}/${this._cs.persons[this.personIndex].name.toLowerCase()}/items`);
    } else {
      this.router.navigateByUrl(`/confirm`)
    }
    
  }

  grandtotal(person: Person): number {
    return this._cs.getGrandTotalForPerson(person);
  }

}
