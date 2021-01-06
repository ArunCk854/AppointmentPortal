import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentDetailFormComponent } from './appointment-details/appointment-detail-form/appointment-detail-form.component';
import { HomeComponent } from './home/home.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorDetailFormComponent } from './doctor-details/doctor-detail-form/doctor-detail-form.component';
import { UserSigninComponent } from './user-details/user-signin/user-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    AppointmentDetailsComponent,
    AppointmentDetailFormComponent,
    routingComponents,
    HomeComponent,
    DoctorDetailsComponent,
    DoctorDetailFormComponent,
    UserSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
