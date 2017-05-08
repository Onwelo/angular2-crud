import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'of-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
