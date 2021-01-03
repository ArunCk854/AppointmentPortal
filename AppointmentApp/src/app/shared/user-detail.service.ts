import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:57231/api/UserDetails'
  formData:UserDetail = new UserDetail();
  list:UserDetail[];
  userNAME:string;
  passWORD:string;

  postUserDetail(){
   return this.http.post(this.baseURL,this.formData)
  }

refreshList(){
  this.http.get(this.baseURL)
  .toPromise()
  .then(res => this.list = res as UserDetail[]);
}


}
