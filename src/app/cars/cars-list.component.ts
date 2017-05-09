import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './car.model';
import { CarsService } from './cars.service';

@Component({
  selector: 'of-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  providers: [CarsService]
})
export class CarsListComponent implements OnInit {
  private router: Router;
  cars: Car[];
  constructor(router: Router, Cars: CarsService) {
    this.router = router;
    Cars.get().subscribe(cars => this.cars = cars);
  }

  ngOnInit() {
  }

  onSelect(car: Car) {
    this.router.navigate(['/cars', car._id]);
  }


}
