import { Component } from '@angular/core';
import { MessageService } from './message.service';
import Alert from './alert/alert.service';

@Component({
    selector: 'of-messages',
    templateUrl: './messages.html'
})
export class MessagesComponent {
    public alerts: Array<Alert> = [];

    constructor(messages: MessageService) {
        messages.listen().subscribe((alert) => {
            this.alerts.push(alert);
        });
        messages.listen().debounceTime(5000).subscribe((e) => {
            this.alerts = [];
        });
    }

    public closeAlert(alert: Alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
