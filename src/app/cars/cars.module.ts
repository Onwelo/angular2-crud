import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { CarsListComponent } from './cars-list.component';
import { CarComponent } from './car.component';
import { CarDetailsComponent } from './car-details.component';
import { CarFormComponent } from './car-form.component';

@NgModule({
  imports: [
    SharedModule,
    CarsRoutingModule
  ],
  declarations: [
    CarsComponent,
    CarsListComponent,
    CarComponent,
    CarDetailsComponent,
    CarFormComponent
  ]
})
export class CarsModule { }
