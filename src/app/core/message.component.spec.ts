import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MessagesComponent } from './messages.component';
import { MessageService } from './message.service';
import Alert from './alert/alert.service';
import * as alert from '../core/alert/alert.service';


describe('CarDetailsComponent', () => {
    let component: MessagesComponent;
    let fixture: ComponentFixture<MessagesComponent>;
    let messageService: MessageService;
    const alertObject: Alert = new alert.SuccessAlert('Alert!');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessagesComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [MessageService]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MessagesComponent);
        component = fixture.componentInstance;
        messageService = TestBed.get(MessageService);
        messageService.dispatch(alertObject);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it(`should have alerts`, async(() => {
        const message = fixture.debugElement.componentInstance;
        expect(message.alerts).toContain(alertObject);
    }));

    it('should render alert', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.textContent).toContain('Alert!');
    }));
});
