import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NamesComponent } from './names/names.component';
import { ItemsComponent } from './items/items.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CalculateComponent } from './calculate/calculate.component';

import { CalculatorService} from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NamesComponent,
    ItemsComponent,
    ConfirmComponent,
    CalculateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
