import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavComponent } from './nav.component';
import { CoreModule } from './core/core.module';
import { CarsModule } from './cars/cars.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickerComponent } from './picker/picker.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    PickerComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    CoreModule.forRoot(),
    CarsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
