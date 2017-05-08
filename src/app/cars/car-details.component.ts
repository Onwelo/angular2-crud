import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CarsService } from './cars.service';
import { Car } from './car.model';
import { MessageService } from '../core/message.service';
import * as alert from '../core/alert/alert.service';

@Component({
  selector: 'of-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  providers: [CarsService]
})
export class CarDetailsComponent implements OnInit {
  car: Car;
  service: CarsService;
  message: MessageService;
  private route: ActivatedRoute;
  private router: Router;
  constructor(router: Router, route: ActivatedRoute, Cars: CarsService, message: MessageService) {
    this.route = route;
    this.service = Cars;
    this.message = message;
    this.router = router;
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getOne(params['id']))
      .subscribe(car => this.car = car);
  }

  save(car: Car) {
    this.service.save(car)
      .subscribe(_ => {
        this.message.dispatch(new alert.SuccessAlert('Car saved!'));
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

  delete(car: Car) {
    this.service.delete(car)
      .subscribe(_ => {
        this.message.dispatch(new alert.WarningAlert('Car deleted!'));
      });
  }

}
