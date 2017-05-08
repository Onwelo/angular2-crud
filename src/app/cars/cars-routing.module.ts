import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list.component';
import { CarDetailsComponent } from './car-details.component';

const routes: Routes = [
    {
    path: 'cars',
    component: CarsComponent,
    children: [
      {
        path: '',
        component: CarsListComponent
      },
      {
        path: ':id',
        component: CarDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
