import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorDetail } from './doctor-detail.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailService {

  constructor(private http:HttpClient) { }
  formData:DoctorDetail=new DoctorDetail();
  readonly baseURL = 'http://localhost:57231/api/DoctorDetails'
  list1: DoctorDetail[];

 postDoctorDetail(){
  return this.http.post(this.baseURL,this.formData);
 }
 putDoctorDetail(){
   return this.http.put(`${this.baseURL}/${this.formData.doctorDetailId}`,this.formData);
  }

  deleteDoctorDetail(id:number){
   return this.http.delete(`${this.baseURL}/${id}`);
  }

 refreshList() {
  this.http.get(this.baseURL)
  .toPromise()
  .then(res => this.list1 = res as DoctorDetail[]);
 }


}
