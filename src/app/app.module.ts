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
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './not-found.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    CoreModule.forRoot(),
    CarsModule,
    LoginRoutingModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AppNavComponent,
    PickerComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
