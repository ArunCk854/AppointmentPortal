import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { HomeComponent } from './home/home.component';
import { UserDetailFormComponent } from './user-details/user-detail-form/user-detail-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserLoginComponent } from './user-details/user-login/user-login.component';


const routes: Routes = [
  { path:'user', component:UserDetailsComponent},
  { path:'signup', component:UserDetailFormComponent},
  { path:'login', component:UserLoginComponent},
  { path:'bookanappointment', component:AppointmentDetailsComponent},
  { path:'home', component:HomeComponent},
  { path:'doctor', component:DoctorDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UserDetailFormComponent,UserLoginComponent,AppointmentDetailsComponent,HomeComponent,UserDetailsComponent,DoctorDetailsComponent]