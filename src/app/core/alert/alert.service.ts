import { Injectable } from '@angular/core';
import { IAlert, alertTypes } from './alert.model';



@Injectable()
export default class Alert implements IAlert {
    id?: number;
    type: string;
    message: string;

    constructor(message: string, type?: string, id?: number) {
        this.id = id;
        this.message = message;
        this.type = type;
    }
}

export class SuccessAlert extends Alert {
    constructor(message: string) {
        super(message);
        this.type = alertTypes.SUCCESS;
    }
}

export class InfoAlert extends Alert {
    constructor(message: string) {
        super(message);
        this.type = alertTypes.INFO;
    }
}

export class WarningAlert extends Alert {
    constructor(message: string) {
        super(message);
        this.type = alertTypes.WARNING;
    }
}

export class DangerAlert extends Alert {
    constructor(message: string) {
        super(message);
        this.type = alertTypes.DANGER;
    }
}
