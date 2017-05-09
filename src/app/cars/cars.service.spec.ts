import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CarsService } from './cars.service';

describe('CarsService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                CarsService,
                { provide: XHRBackend, useClass: MockBackend },
            ]
        });
    });

    describe('get()', () => {
        it('should return an Observable<Array<Car>>', inject([CarsService, XHRBackend], (carsService, mockBackend) => {

            const mockResponse = [
                { id: 0, name: 'Audi', cylinders: 8, horsepower: 420, country: 'Germany', km_per_liter: 10, weigth: 1500 },
                { id: 1, name: 'Bentley', cylinders: 16, horsepower: 200, country: 'UK', km_per_liter: 12, weigth: 1400 }
            ];

            mockBackend.connections.subscribe((connection) => {
                connection.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(mockResponse)
                })));
            });

            carsService.get().subscribe((cars) => {
                expect(cars.length).toBe(2);
                expect(cars[0].name).toEqual('Audi');
            });

        }));

        it('should throw an Error', inject([CarsService, XHRBackend], (carsService, mockBackend) => {

            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockError(new Error('some error'));
                });

            carsService.get().catch((error: any) => {
                expect(error).toEqual('Server error');
            });
        }));
    });
});