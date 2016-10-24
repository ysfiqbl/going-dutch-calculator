import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../person';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persons: Person[];
  name: string;

  constructor(private _cs: CalculatorService, private router: Router) { 
    this.persons = new Array<Person>();
    this.name = '';
  }

  ngOnInit() {
    this.persons = this._cs.get();
  }

  add(): void {
    let p = new Person();
    p.name = this.name;
    this.persons = this._cs.add(p);
    this.name = '';
  }

  remove(index: number): void {
    this.persons = this._cs.remove(index);
  }

  next() {
    this.router.navigateByUrl('/items');
  }

}
