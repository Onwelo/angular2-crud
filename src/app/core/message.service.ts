import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import Alert from './alert/alert.service';

@Injectable()
export class MessageService {
    messages: Subject<Alert> = new Subject<Alert>();

    dispatch(message: Alert) {
        this.messages.next(message);
    }

    listen(type?: string): Observable<Alert> {
        return this.messages.filter(message => type ? message.type === type : true);
    }
}
