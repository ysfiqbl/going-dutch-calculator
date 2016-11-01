import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NamesComponent } from './names/names.component';
import { ItemsComponent } from './items/items.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'names',
        component: NamesComponent
    },
    {
        path: ':index/:name/items',
        component: ItemsComponent
    },
    {
        path: 'confirm',
        component: ConfirmComponent
    },
    {
        path: 'calculate',
        component: CalculateComponent
    },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);