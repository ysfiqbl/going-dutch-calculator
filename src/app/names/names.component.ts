import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../person';
import { CalculatorService } from '../calculator.service';


@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  persons: Person[];
  name: string;

  constructor(private _cs: CalculatorService, private router: Router) { 
    this.persons = new Array<Person>();
    this.name = '';
  }

  ngOnInit() {
    this.persons = this._cs.getPerson();
  }

  add(): void {
    let p = new Person();
    p.name = this.name;
    this.persons = this._cs.addPerson(p);
    this.name = '';
  }

  remove(index: number): void {
    this.persons = this._cs.removePerson(index);
  }

  next() {
    this.router.navigateByUrl('/items');
  }


}
