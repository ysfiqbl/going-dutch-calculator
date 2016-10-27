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
  subtotal: number;
  grandtotal: number

  constructor(private _cs: CalculatorService, private router: Router) { 
    
  }

  ngOnInit() {
    
  }

  next() {
    this._cs.setSubTotal(this.subtotal);
    this._cs.setGrandTotal(this.grandtotal);
    this.router.navigateByUrl('/names');
  }

}
