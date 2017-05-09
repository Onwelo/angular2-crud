import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { Car } from './car.model';
import { Observable } from 'rxjs/Rx';
import { CarsService } from './cars.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarDetailsComponent } from './car-details.component';

xdescribe('CarDetailsComponent', () => {
  let component: CarDetailsComponent;
  let fixture: ComponentFixture<CarDetailsComponent>;
  let carsService: CarsService;
  let router: Router;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarDetailsComponent],
      providers: [
        CarsService,
        MockBackend,
        BaseRequestOptions,
        Router,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(inject([ CarsService, MockBackend, Router ],
  (cs: CarsService, mb: MockBackend, r: Router) => {
    carsService = cs;
    router = r;
    mockBackend = mb;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailsComponent);
    component = fixture.componentInstance;
    // const carsService = fixture.debugElement.injector.get(CarsService);
    const spy = spyOn(carsService, 'getOne').and.returnValue(Observable.of(Car));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
