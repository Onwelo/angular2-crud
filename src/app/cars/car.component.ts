import { Component, OnInit } from '@angular/core';
import { Input, EventEmitter, Output } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'of-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  select() {
    this.selected.emit();
  }

}
