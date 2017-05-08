import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [MessagesComponent],
    exports: [MessagesComponent],
    providers: [MessageService]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        };
    }
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
