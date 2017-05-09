import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { Car } from './car.model';
import { Observable } from 'rxjs/Rx';
import { CarsService } from './cars.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarsListComponent } from './cars-list.component';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;
  let carsService: CarsService;
  let carServiceSpy: any;
  let router: Router;
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsListComponent],
      providers: [
        CarsService,
        MockBackend,
        BaseRequestOptions,
        { provide: Router, useClass: RouterTestingModule },
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(inject([CarsService, MockBackend, Router],
    (cs: CarsService, mb: MockBackend, r: Router) => {
      carsService = cs;
      router = r;
      mockBackend = mb;
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
