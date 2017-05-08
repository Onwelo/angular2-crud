import { Car } from './car.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'of-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

    @Input() car: Car;
    @Output() saved = new EventEmitter();
    @Output() deleted = new EventEmitter();
    form: FormGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            country: ['', Validators.required],
            horsepower: ['', Validators.required],
            weigth: ['', Validators.required],
            cylinders: ['', Validators.required],
            km_per_liter: ['', Validators.required]
        });
    }
    onSubmit(event: Event) {
        event.preventDefault();
        this.saved.emit();
    }
    delete() {
        this.deleted.emit();
    }
    ngOnInit() {
        this.form.valueChanges
            .filter((value) => this.form.valid)
            .subscribe((value) => {
                console.log('Model Driven Form valid value: vm = ', JSON.stringify(value));
            });
    }

}
