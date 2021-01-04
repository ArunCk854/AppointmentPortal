import { Injectable } from '@angular/core';
import { AppointmentDetail } from './appointment-detail.model';
import { HttpClient } from "@angular/common/http";
import { DoctorDetail } from './doctor-detail.model';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailService {

  constructor(private http:HttpClient) { }

  formData:AppointmentDetail = new AppointmentDetail();
   readonly baseURL = 'http://localhost:57231/api/AppointmentDetails'
   list: AppointmentDetail[];
   list1:DoctorDetail[];

  postAppointmentDetail(){
   return this.http.post(this.baseURL,this.formData).pipe(map(response=>{
     return response;
   }))
   
  }


  refreshList() {
   this.http.get(this.baseURL)
   .toPromise()
   .then(res => this.list = res as AppointmentDetail[]);
 }
 refreshList1(){
  this.http.get('http://localhost:57231/api/DoctorDetails')
  .toPromise()
  .then(res => this.list1 = res as DoctorDetail[]);
 }

 }
